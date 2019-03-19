import React, { Component } from 'react';
import './components/modules/intui.scss';

// import del elemento principal
import Intui from './components/jsx/intui';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>react-castillo-template</h1>
      <hr/>
        <Intui author="Cristian Castillo. 2019-next."/>
      </div>
    );
  }
}
export default App;
