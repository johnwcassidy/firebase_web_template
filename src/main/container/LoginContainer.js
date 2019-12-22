import React from 'react';
import { isMobileOnly } from 'react-device-detect';
import LoginForm from '../component/LoginForm';

const width = isMobileOnly ? window.innerWidth : 400;

export default function LoginContainer({ onLoginSubmit, error }) {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <div style={{ width: width }}>
        <LoginForm onLoginSubmit={onLoginSubmit} error={error} />
      </div>
    </div>
  );
}
