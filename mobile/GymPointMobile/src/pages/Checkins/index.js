import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert } from 'react-native';
import { withNavigationFocus } from 'react-navigation';

import { withTheme } from 'styled-components';

import Background from '~/components/Background';
import CheckinButton from '~/components/Button';
import Checkin from '~/components/Checkin';
import Header from '~/components/Header';
import api from '~/services/api';

import { Container, CheckinList } from './styles';

function Checkins({ isFocused }) {
  // const studentId = useSelector(state => state.auth.student.id);
  const [checkins, setCheckins] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [page, setPage] = useState(1);
  // const [refreshing, setRefreshing] = useState(false);

  async function loadCheckins(nextPage = 1) {
    try {
      const studentId = 1;
      const response = await api.get(
        `/students/${studentId}/checkins?page=${nextPage}`,
      );

      // setCheckins(
      //    nextPage >= 2 ? [...checkins, ...response.data] : response.data,
      // );

      setCheckins(response.data);
      // setPage(nextPage);
      setLoading(false);
      // setRefreshing(false);
    } catch (err) {
      err.response.data.errors.map(error =>
        Alert.alert('Falha no check-in', error.msg),
      );
    }
  }

  useEffect(() => {
    if (isFocused) {
      setLoading(true);
      loadCheckins();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleNew() {
    try {
      const studentId = 1;
      const response = await api.post(`/students/${studentId}/checkins`);

      Alert.alert('Sucesso', 'Check-in feito com sucesso!');

      setCheckins([...checkins, response.data]);
    } catch (err) {
      err.response.data.errors.map(error =>
        Alert.alert('Falha no check-in', error.msg),
      );
    }
  }

  return (
    <Background>
      <Container>
        <CheckinButton loading={false} onPress={handleNew}>
          Novo check-in
        </CheckinButton>
        {loading ? (
          <ActivityIndicator color="#EE4E62" style={{ marginTop: 20 }} />
        ) : (
          <CheckinList
            data={checkins}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => <Checkin data={item} />}
          />
        )}
      </Container>
    </Background>
  );
}

Checkins.navigationOptions = {
  headerTitle: props => <Header {...props} />,
};

export default withTheme(withNavigationFocus(Checkins));
