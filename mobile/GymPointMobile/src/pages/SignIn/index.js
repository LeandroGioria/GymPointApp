import React from 'react';
import { Image } from 'react-native';

import logo from '../../assets/logo.png';
import Background from '../../components/Background';
import { Container, SubmitButton, Form, FormInput } from './styles';

export default function SignIn() {
  function handleSubmit() {
    // dispatch(signInRequest(email, password));
  }

  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrenct={false}
            autoCapitalize="none"
            placeholder="Informe seu ID de cadastro"
            returnKeyType="next"
            // onSubmitEditing={() => passwordRef.current.focus()}
            // value={email}
            // onChangeText={setEmail}
          />
          <SubmitButton loading={false} onPress={handleSubmit}>
            Entrar no sistema
          </SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
