import React from 'react';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';

const Container = styled.div`
  background-color: #282c33;
  min-height: 60px;
  max-height: 60px;
`;

const Title = styled.div`
  text-align: center;
  color: #fff;
  font-size: 1.5em;
  font-weight: 200;
`;

const Image = styled.div`
  margin: 10px;
`;

export default function DrawerHeader({ onClosed, left, right, title }) {

  const textAlign = left ? 'right' : 'left';

  return (
    <Container style={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <Image>{left ? <CloseIcon fontSize='large' style={{ color: 'white' }} onClick={onClosed} /> : null}</Image>
      <Title style={{ flex: 1, textAlign: textAlign }}>{title}</Title>
      <Image>{right ? <CloseIcon fontSize='large' style={{ color: 'white' }} onClick={onClosed} /> : null}</Image>
    </Container>
  );
}
