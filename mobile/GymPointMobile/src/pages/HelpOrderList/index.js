import React from 'react';
import { withNavigationFocus } from 'react-navigation';

import { withTheme } from 'styled-components';

import Background from '~/components/Background';
import Header from '~/components/Header';

import {
  Container,
  NewHelpButton,
  HelpList,
  Help,
  Title,
  Time,
  Question,
  HelpHeader,
} from './styles';

function HelpOrderList({ navigation }) {
  return (
    <Background>
      <Container>
        <NewHelpButton
          onPress={() => {
            navigation.navigate('NewHelpOrder');
          }}>
          Novo pedido de auxílio
        </NewHelpButton>
        <HelpList>
          <Help
            onPress={() => {
              navigation.navigate('Details' /* , { helpOrder: data } */);
            }}>
            <HelpHeader>
              <Title feedback>Respondido</Title>
              <Time>Hoje ás 14h</Time>
            </HelpHeader>
            <Question>
              Olá pessoal da academia, gostaria de saber se quando acordar devo
              ingerir batata doce e frango logo de primeira, preparar asOlá
              pessoal da academia, gostaria de saber se quando acordar devo
              ingerir batata doce e frango logo de primeira, preparar asOlá
              pessoal da academia, gostaria de saber se quando acordar devo
              ingerir batata doce e frango logo de primeira, preparar asOlá
              pessoal da academia, gostaria de saber se quando acordar devo
              ingerir batata doce e frango logo de primeira, preparar as
            </Question>
          </Help>
          <Help>
            <HelpHeader>
              <Title>{0 ? 'Respondido' : 'Sem resposta'}</Title>
              <Time>Hoje ás 14h</Time>
            </HelpHeader>
            <Question>
              Olá pessoal da academia, gostaria de saber se quando acordar devo
              ingerir batata doce e frango logo de primeira, preparar as
            </Question>
          </Help>
        </HelpList>
      </Container>
    </Background>
  );
}

HelpOrderList.navigationOptions = () => ({
  headerTitle: props => <Header {...props} />,
});

export default withTheme(withNavigationFocus(HelpOrderList));
