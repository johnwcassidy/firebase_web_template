import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import firebase from 'firebase/app';
import { onAuthStateChange, login, logout } from './main/action/authentication';
import Header from './main/component/Header';
import NavigationMenu from './main/container/NavigationMenu';
import ProfileMenu from './main/container/ProfileMenu';
import { ActionRoutes } from './main/navigation';

import { UserContext } from './main/context/UserContext';
import LoginContainer from './main/container/LoginContainer';

import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

// import project specific firebase integration
const configuration = require('./app/configuration.json');

firebase.initializeApp(configuration.firebase);

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChange(userInfo => {
      setProcessing(false);
      setUser(userInfo);
      dispatch({ type: 'RESET_NAVIGATION' });
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  const requestLogin = (username, password) => {
    login(username, password).catch(error => setError(error.code));
  };

  const requestLogout = () => {
    logout();
  };

  const onMenuPressed = () => {
    dispatch({ type: 'TOGGLE_MENU' });
  };
  const onProfilePressed = () => {
    dispatch({ type: 'TOGGLE_PROFILE' });
  };
  const onMenuClosed = () => {
    dispatch({ type: 'RESET_NAVIGATION' });
  };

  if (processing) {
    return null;
  }

  if (user === null) {
    return (
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Header />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 30 }}>
          <LoginContainer onLoginSubmit={requestLogin} error={error} />
        </div>
      </div>
    );
  }

  return (
    <div className='App'>
      <NotificationContainer />
      <Header onMenuPressed={onMenuPressed} onProfilePressed={onProfilePressed} />
      <UserContext.Provider value={{ loggedIn: user, email: user && user.email }}>
        <BrowserRouter>
          <NavigationMenu onClosed={onMenuClosed} />
          <ProfileMenu onClosed={onMenuClosed} onLogout={requestLogout} />
          <ActionRoutes />
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
