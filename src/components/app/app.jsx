import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import Favorites from '../favorites/favorites';
import SignIn from '../sign-in/sign-in';
import Room from '../room/room';
import NotFound from '../not-found/not-found';

import {AppRoute} from '../../constants';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage offerCount={6} />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <Favorites />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <SignIn />
        </Route>
        <Route exact path={AppRoute.ROOM}>
          <Room />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
