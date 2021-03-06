import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import { Types as AuthTypes } from '~/store/ducks/Auth';

import { useDispatch } from 'react-redux';

import { Container, Title, Input, Form, Button, Label } from './styles';

export default function Auth() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  const dispatch = useDispatch();


  function handleLogin() {
    dispatch({
      type: AuthTypes.SET_LOGIN,
      payload: {}
    });

    navigation.navigate('Films')
  }

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

        <Button
          onPress={handleLogin}
        >
          <Label>START</Label>
        </Button>
      </Form>

    </Container>
  )
}
