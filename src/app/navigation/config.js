import React from 'react';

import ScheduleIcon from '@material-ui/icons/Schedule';
import SampleScreen from '../screens/Sample';

const config = {
  navigation: {
    items: [
      {
        title: 'Sample',
        path: '/sample',
        icon: <ScheduleIcon fontSize='large' style={{ color: 'white' }} />
      }
    ]
  },
  routes: [
    {
      path: '/sample/:id',
      main: () => <SampleScreen />
    },
    {
      path: '/sample',
      main: () => <SampleScreen />
    }
  ],
  defaultPath: '/sample'
};

export default config;
