import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import ProfileIcon from '@material-ui/icons/AccountCircle';
import logo from '../../app/logo.png';

const Container = styled.div`
  background-color: #282c33;
  min-height: 60px;
  max-height: 60px;
`;

const Title = styled.div`
  text-align: center;
  color: #fff;
`;

const Image = styled.div`
  margin: 10px;
`;

const Logo = styled.img`
  height: 40px;
  pointer-events: none;
`;

export default function Header({ onMenuPressed, onProfilePressed }) {
  return (
    <Container style={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <Image>
        {onMenuPressed ? <MenuIcon fontSize='large' style={{ color: 'white' }} onClick={onMenuPressed} /> : null}
      </Image>
      <Title style={{ flex: 1 }}>
        <Logo src={logo} alt='logo' />
      </Title>
      <Image>
        {onProfilePressed ? (
          <ProfileIcon fontSize='large' style={{ color: 'white' }} onClick={onProfilePressed} />
        ) : null}
      </Image>
    </Container>
  );
}
