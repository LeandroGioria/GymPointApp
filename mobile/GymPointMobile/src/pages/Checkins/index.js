/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import { useSelector } from 'react-redux';

import { withTheme } from 'styled-components';

import Background from '~/components/Background';
import CheckinButton from '~/components/Button';
import Checkin from '~/components/Checkin';
import Header from '~/components/Header';
import api from '~/services/api';

import { Container, CheckinList, Text } from './styles';

function Checkins({ isFocused }) {
  const studentId = useSelector(state => state.auth.student.id);
  const [checkins, setCheckins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);

  async function loadCheckins(nextPage = 1) {
    try {
      console.tron.log('load');
      const response = await api.get(
        `/students/${studentId}/checkins?page=${nextPage}`,
      );

      setCheckins(
        nextPage >= 2 ? [...checkins, ...response.data] : response.data,
      );

      setCheckins(response.data);
      setLoading(false);
      setPage(nextPage);
      setRefreshing(false);
    } catch (err) {
      Alert.alert('Falha no check-in', 'Erro ao carregar check-ins');
    }
  }

  useEffect(() => {
    if (isFocused) {
      setLoading(true);
      loadCheckins();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  async function handleOnEndReached() {
    const nextPage = page + 1;

    loadCheckins(nextPage);
  }

  async function handleOnRefreshList() {
    setRefreshing(true);
    setCheckins([]);

    loadCheckins();
  }

  async function handleNew() {
    try {
      const response = await api.post(`/students/${studentId}/checkins`);
      Alert.alert('Check-In', 'Check-in efetuado com sucesso!');
      setCheckins([...checkins, response.data]);
    } catch (err) {
      Alert.alert('Erro', 'Limite de 5 check-ins por semana atingido');
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
        ) : checkins.length === 0 ? (
          <Text>Nenhum check-in efetuado</Text>
        ) : (
          <CheckinList
            data={checkins}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => <Checkin data={item} />}
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

Checkins.navigationOptions = {
  headerTitle: props => <Header {...props} />,
};

export default withTheme(withNavigationFocus(Checkins));
