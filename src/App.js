import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


import Home from './components/Home';
// import Result from './components/Result';
import Test from './components/Test';


export default class App extends Component {
    render(){
      return(
        <div>
          <Home/>
          <Test/>
         

        </div>
      )
    }
}
