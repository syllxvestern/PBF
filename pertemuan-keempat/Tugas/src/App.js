//import logo from './logo.svg';
//import './App.css';
//import React, { Component } from 'react';
//import Footer from './footer';
//import List from './list';
//import Lifecycle from './lifecycle';

//class App extends Component {
  //render() {
    //return (
      //<div>
        //<h1>Component dari Class App</h1>
        //<Footer judul='Halaman Footer' nama='Hanin Syafiq R' />
        //<List/>
        //<Lifecycle />

      //</div>
    //);
  //}
//}export default App;

import React, { Component } from 'react';
import Lifecycle from './HelloComponent';
import HelloComponent from './HelloComponent';
class App extends Component {
  render() {
    return HelloComponent();
  }
}
export default App;