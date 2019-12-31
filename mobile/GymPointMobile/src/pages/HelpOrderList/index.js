import React from 'react';

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

export default function HelpOrderList() {
  return (
    <Background>
      <Container>
        <Header />
        <NewHelpButton>Novo pedido de auxílio</NewHelpButton>
        <HelpList>
          <Help>
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
