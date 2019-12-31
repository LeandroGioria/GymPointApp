import React from 'react';
import { /* ActivityIndicator, */ Alert } from 'react-native';
import { withNavigationFocus } from 'react-navigation';

import { withTheme } from 'styled-components';

import Background from '~/components/Background';
import CheckinButton from '~/components/Button';
import Header from '~/components/Header';
// import api from '~/services/api';

import { Container, CheckinList, Item, Time, Text } from './styles';

function Checkins({ isFocused }) {
  // const studentId = useSelector(state => state.auth.student.id);
  // const [checkins, setCheckins] = useState([]);
  // const [page, setPage] = useState(1);
  // const [loading, setLoading] = useState(false);
  // const [refreshing, setRefreshing] = useState(false);

  async function handleNew() {
    try {
      // const response = await api.post(`/students/${studentId}/checkins`);

      Alert.alert('Sucesso', 'Check-in feito com sucesso!');

      // setCheckins([...checkins, response.data]);
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
        <CheckinList>
          <Item>
            <Text>Check-in #5</Text>
            <Time>12:00h</Time>
          </Item>
          <Item>
            <Text>Check-in #4</Text>
            <Time>12:00h</Time>
          </Item>
          <Item>
            <Text>Check-in #3</Text>
            <Time>12:00h</Time>
          </Item>
        </CheckinList>
      </Container>
    </Background>
  );
}

Checkins.navigationOptions = {
  headerTitle: props => <Header {...props} />,
};

export default withTheme(withNavigationFocus(Checkins));
