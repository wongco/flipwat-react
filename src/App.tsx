import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './Containers/NavBar';
import CategoryList from './Containers/CategoryList';

class App extends Component {
  public render(): React.ReactNode {
    return (
      <div className="App">
        <NavBar />
        <CategoryList />
        <Switch>
          <Route exact path="/" render={(): React.ReactNode => <div>Home Page</div>} />
          <Route
            exact
            path="/category/:id"
            render={(props): React.ReactNode => {
              const { id } = props.match.params;
              return <div>{`Category Number ID: ${id}`}</div>;
            }}
          />
          <Route render={(): React.ReactNode => <div>404 - Nothing to see here.</div>} />
        </Switch>
      </div>
    );
  }
}

export default App;
