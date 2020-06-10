import React, { useState } from 'react';

import LoginButton from '~/components/LoginButton';

import { Container, Title, Input, Form } from './styles';

export default function Auth() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <Title>Ei {'\n'}Bem-vindo de volta</Title>

      <Form>
        <Input
          autoFocus
          autoCapitalize={false}
          autoCorrect={false}
          keyboardType={"email-address"}
          placeholderTextColor="#FFFFFF"
          placeholder="Email"
          onChangeText={setEmail}

        />

        <Input
          autoCapitalize={false}
          autoCorrect={false}
          secureTextEntry
          placeholderTextColor="#FFFFFF"
          placeholder="Senha"
          onChangeText={setPassword}
        />

        <LoginButton
        />
      </Form>

    </Container>
  )
}
