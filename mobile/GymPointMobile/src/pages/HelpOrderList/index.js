import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Background from '~/components/Background';
import Header from '~/components/Header';
import HelpOrder from '~/components/HelpOrder';
import api from '~/services/api';

import { Container, NewHelpButton, HelpList } from './styles';

function HelpOrderList({ navigation, isFocused }) {
  const studentId = useSelector(state => state.auth.student.id);
  const [helpOrders, setHelpOrders] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  async function loadHelpOrders(nextPage = 1) {
    const response = await api.get(
      `students/${studentId}/help-orders?page=${nextPage}`,
    );

    setHelpOrders(
      nextPage >= 2
        ? [...helpOrders, ...response.data.reverse()]
        : response.data.reverse(),
    );
    setPage(nextPage);
    setLoading(false);
    setRefreshing(false);
  }

  useEffect(() => {
    if (isFocused) {
      setLoading(true);
      loadHelpOrders();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  async function handleOnEndReached() {
    const nextPage = page + 1;
    loadHelpOrders(nextPage);
  }

  async function handleOnRefreshList() {
    setRefreshing(true);
    setHelpOrders([]);
    loadHelpOrders();
  }

  return (
    <Background>
      <Container>
        <NewHelpButton
          onPress={() => {
            navigation.navigate('NewHelpOrder');
          }}>
          Novo pedido de auxílio
        </NewHelpButton>

        {loading ? (
          <ActivityIndicator color="#EE4E62" style={{ marginTop: 20 }} />
        ) : (
          <HelpList
            data={helpOrders}
            keyExtractor={(item, index) => String(index)}
            renderItem={({ item }) => <HelpOrder data={item} />}
            onEndReached={handleOnEndReached}
            onEndReachedThreshold={0.1}
            onRefresh={handleOnRefreshList}
            refreshing={refreshing}
          />
        )}
      </Container>
    </Background>
  );
}

HelpOrderList.navigationOptions = () => ({
  headerTitle: <Header />,
});

HelpOrderList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigationFocus(HelpOrderList);
