import React from 'react';

import Background from '~/components/Background';
import Header from '~/components/Header';

import {
  Container,
  CheckinButton,
  CheckinList,
  Item,
  Time,
  Text,
} from './styles';

export default function Checkins() {
  return (
    <Background>
      <Container>
        <Header />
        <CheckinButton loading={false} onPress={() => {}}>
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
          <Item>
            <Text>Check-in #2</Text>
            <Time>12:00h</Time>
          </Item>
          <Item>
            <Text>Check-in #1</Text>
            <Time>12:00h</Time>
          </Item>
        </CheckinList>
      </Container>
    </Background>
  );
}
