import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Drawer from '@material-ui/core/SwipeableDrawer';
import { makeStyles } from '@material-ui/core/styles';
import { isMobileOnly } from 'react-device-detect';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import DrawerHeader from '../component/DrawerHeader';

import AppConfig from '../../app/navigation/config';

const useStyles = makeStyles({
  fullList: {
    width: isMobileOnly ? window.innerWidth : 300,
    backgroundColor: '#282c33',
    flex: 1,
    color: '#FFF'
  }
});

const linkStyle = {
  fontSize: '2em',
  color: '#FFF',
  textDecoration: 'none',
  fontWeight: 300
};

const activeLinkStyle = {
  fontWeight: 'bold'
};

export default function NavigationMenu({ onClosed }) {
  const classes = useStyles();
  const [toggled, setToggled] = useState(true);

  const menu = useSelector(state => state.menu);

  let debouncer = null; // mutex to block against multiple timeouts

  useEffect(() => {
    setToggled(menu.menuToggled);
  }, [menu.menuToggled]);

  const onListClicked = () => {
    if (debouncer === null) {
      debouncer = setTimeout(() => {
        onClosed();
      }, 300);
    }
  };

  const onOpened = () => {};

  return (
    <Drawer anchor='left' open={toggled} onClose={onClosed} onOpen={onOpened}>
      <div className={classes.fullList} role='presentation' onClick={onListClicked}>
        <DrawerHeader right onClosed={onClosed} title='Navigation' />
        <List>
          {AppConfig.navigation.items.map((item, index) => (
            <NavLink key={item.path} style={linkStyle} activeStyle={activeLinkStyle} to={item.path}>
              <ListItem button>
                <ListItemIcon>{item.icon}</ListItemIcon>
                {item.title}
              </ListItem>
            </NavLink>
          ))}
        </List>
      </div>
    </Drawer>
  );
}
