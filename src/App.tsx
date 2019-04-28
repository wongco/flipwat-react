import React, { Component } from 'react';
import './App.css';
import Header from './Containers/Header';
import CategoryList from './Containers/CategoryList';
import Routes from './Routes';

class App extends Component {
  public render(): React.ReactNode {
    return (
      <div className="App">
        <div className="App-Header">
          <Header />
        </div>
        <div className="App-Content">
          <div className="App-Content--CategoryList">
            <CategoryList />
          </div>
          <div className="App-Content--Main">
            <Routes />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
