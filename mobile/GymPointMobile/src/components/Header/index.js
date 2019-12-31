import React from 'react';
import { Image } from 'react-native';

import logo from '../../assets/logo2.png';
import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <Image style={{ width: 130, height: 19 }} source={logo} />
    </Container>
  );
}
