import React, { useState, useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Drawer from '@material-ui/core/SwipeableDrawer';
import { makeStyles } from '@material-ui/core/styles';
import { isMobileOnly } from 'react-device-detect';

import DrawerHeader from '../component/DrawerHeader';
import { Button } from '@material-ui/core';
import { UserContext } from '../context/UserContext';

const useStyles = makeStyles({
  fullList: {
    width: isMobileOnly ? window.innerWidth : 300,
    backgroundColor: '#282c33',
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
});

const LargeText = styled.div`
  color: #fff;
  font-size: 1.5em;
  font-weight: 200;
  text-align: right;
`;

const MediumText = styled.div`
  color: #fff;
  font-size: 1em;
  font-weight: 300;
  text-align: right;
`;

export default function ProfileMenu({ onClosed, onLogout }) {
  const classes = useStyles();
  const [toggled, setToggled] = useState(true);

  const menu = useSelector(state => state.menu);

  const user = useContext(UserContext);

  useEffect(() => {
    setToggled(menu.profileToggled);
  }, [menu.profileToggled]);

  const onOpened = () => {};

  return (
    <Drawer anchor='right' open={toggled} onClose={onClosed} onOpen={onOpened}>
      <div className={classes.fullList} role='presentation'>
        <DrawerHeader left onClosed={onClosed} title='Profile' />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', marginRight: 20 }}>
          <LargeText>Logged in as</LargeText>
          <MediumText>{user.email}</MediumText>
        </div>
        <Button variant='contained' color='secondary' style={{ margin: 10 }} onClick={onLogout}>
          Logout
        </Button>
      </div>
    </Drawer>
  );
}
