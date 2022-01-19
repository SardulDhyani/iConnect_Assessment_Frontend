import { React } from 'react';
import { Route, Switch } from 'react-router-dom';

import MenuBar from '../MenuBar/MenuBar.Component';
import IndexPage from '../IndexPage';
import Company from '../Company';

const AppRoutes = () => {
  return (
    <>
      <MenuBar />
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/add" component={Company} />
        <Route exact path="/edit/:companyID" component={Company} />
      </Switch>
    </>
  );
};

export default AppRoutes;
