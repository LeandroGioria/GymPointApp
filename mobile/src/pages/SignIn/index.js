import React, { useState } from 'react';
import { Image } from 'react-native';
import { useDispatch } from 'react-redux';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '../../assets/logo-vertical.png';
import Background from '../../components/Background';
import { Container, SubmitButton, Form, FormInput } from './styles';

export default function SignIn() {
  const dispatch = useDispatch();
  const [id, setId] = useState();

  function handleSubmit() {
    dispatch(signInRequest(id));
  }

  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            keyboardType="numeric"
            autoCorrenct={false}
            autoCapitalize="none"
            placeholder="Informe seu ID de cadastro"
            value={id}
            onChangeText={setId}
          />
          <SubmitButton loading={false} onPress={handleSubmit}>
            Entrar no sistema
          </SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
