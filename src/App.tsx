import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';
import Panel from './Containers/Panel';

class App extends Component {
  public render(): React.ReactNode {
    return (
      <div className="App">
        <div className="App-Panel">
          <Panel
            categories={[
              { name: 'catOne', id: '1231ds' },
              { name: 'catTwo', id: '34534ss' },
            ]}
          />
        </div>
        <div className="App-Content">
          <Routes />
        </div>
      </div>
    );
  }
}

export default App;
