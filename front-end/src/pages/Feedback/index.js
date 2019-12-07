import React from 'react';

import { Input } from '@rocketseat/unform';
import { Container, Scroll } from './styles';

export default function Feedback() {
  return (
    <Container>
      <span>PERGUNTA DO ALUNO</span>
      <Scroll>
        Olá pessoal da academia, gostaria de saber se quando acordar devo
        ingerir batata doce e frango logo de primeira, preparar as marmitas e
        lotar a geladeira? Dooal da academia, gostaria de saber se quando
        acordar devo ingerir bataoal da academia, gostaria de saber se quando
        acordar devo ingerir batata doce e frango logo de primeira, preparar as
        marmitas e lotar a geladeira? Douoal da academia, gostaria de saber se
        quando acordar devo ingerir batata doce e frango logo de primeira,
        preparar as marmitas e lotar a geladeira? Douoal da academia, gostaria
        de saber se quando acordar devo ingerir batata doce e frango logo de
        primeira, preparar as marmitas e lotar a geladeira? Douta doce e frango
        logo de primeira, preparar as marmitas e lotar a geladeira? Douoal da
        academia, gostaria de saber se quando acordar devo ingerir batata doce e
        frango logo de primeira, preparar as marmitas e lotar a geladeira? Douu
        um pico de insulina e jogo hipercalórico?
      </Scroll>
      <span>SUA RESPOSTA</span>
      <br />
      <Input name="resposta" type="text" />
      <button type="button">Responder Aluno</button>
    </Container>
  );
}
