import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core/';
import styled from 'styled-components';

const Container = styled.div`
  margin: 10px;
  padding: 10px;
  background: #f2f8ff;
  border-radius: 10px;
`;

const Error = styled.span`
  text-align: center;
  margin-top: 10px;
  color: red;
`;

const errorMap = {
  'auth/invalid-email': 'Please enter a valid email and password',
};

export default function LoginForm({ onLoginSubmit, error }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    if (onLoginSubmit) {
      onLoginSubmit(username, password);
    }
  };

  const getError = () => {
    if (error) {
      return errorMap['auth/invalid-email'];
    }
    return null;
  }

  return (
    <Container style={{ display: 'flex', flexDirection: 'column' }}>
      <TextField
        label='email'
        style={{ marginBottom: 10 }}
        onChange={event => {
          setUsername(event.target.value);
        }}
      />
      <TextField
        label='password'
        style={{ marginBottom: 10 }}
        type='password'
        onChange={event => {
          setPassword(event.target.value);
        }}
      />
      <Button variant='contained' color='primary' onClick={onSubmit}>
        Login
      </Button>
      <Error>{getError()}</Error>
    </Container>
  );
}
