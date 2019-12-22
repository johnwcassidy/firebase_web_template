import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AppConfig from '../../app/navigation/config';
import { UserContext } from '../context/UserContext';
import LoginContainer from '../container/LoginContainer';
import NotFoundScreen from '../component/NotFoundScreen';

export const ActionRoutes = () => {
  const user = useContext(UserContext);

  if (user) {
    return (
      <div>
        <Switch>
          {AppConfig.routes.map(item => (
            <Route key={item.path} path={item.path} component={item.main} />
          ))}

          {/* Set our root screen */}
          <Route key='root' path='/' exact={true} component={() => <Redirect from='/' to={AppConfig.defaultPath} />} />
          
          {/* Fall through screen is 404 */}
          <Route component={() => <NotFoundScreen />} />
        </Switch>
      </div>
    );
  } else {
    return (
      <Switch>
        <Route key='login' path='/login' exact={false} component={() => <LoginContainer />} />
        <Route render={props => <Redirect to={{ pathname: '/login', state: { from: { pathname: '/' } } }} />} />
      </Switch>
    );
  }
};
