import React, { useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import Background from '~/components/Background';
import Header from '~/components/Header';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import {
  Container,
  Box,
  HeaderMod,
  Title,
  Time,
  Content,
  Answer,
} from './styles';

export default function Details({ navigation }) {
  const helpOrder = navigation.getParam('helpOrderData');

  const formattedTime = useMemo(() => {
    return formatRelative(parseISO(helpOrder.createdAt), new Date(), {
      locale: pt,
    });
  }, [helpOrder.createdAt]);

  return (
    <Background>
      <Container>
        <Box>
          <HeaderMod>
            <Title>Pergunta</Title>
            <Time>{formattedTime}</Time>
          </HeaderMod>
          <Content>{helpOrder.question}</Content>
          {helpOrder.answer && (
            <Answer>
              <Title>Resposta</Title>
              <Content>{helpOrder.answer}</Content>
            </Answer>
          )}
        </Box>
      </Container>
    </Background>
  );
}

Details.navigationOptions = ({ navigation }) => ({
  headerTitle: <Header />,
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}>
      <Icon name="chevron-left" size={24} color="#000" />
    </TouchableOpacity>
  ),
});

Details.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
