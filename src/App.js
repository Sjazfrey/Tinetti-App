import React, { Component } from 'react';
import './App.css';
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
