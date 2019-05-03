import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './Components/HomePage';
import CategoryView from './Containers/CategoryView';

class Routes extends Component {
  public render(): React.ReactNode {
    return (
      <Switch>
        <Route exact path="/" render={(): React.ReactNode => <HomePage />} />
        <Route
          exact
          path="/category/:id"
          render={(props): React.ReactNode => <CategoryView {...props} />}
        />
        {/* <Route
          exact
          path="/category/:id/:cardId"
          render={(props): React.ReactNode => {
            const { id, cardId } = props.match.params;
            return (
              <div>
                <div>Category Number ID: {id}</div>
                <div>CardID: {cardId}</div>
              </div>
            );
          }}
        /> */}
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default Routes;
