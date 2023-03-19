/* import React, { Component } from 'react' */
import React from 'react';
import SearchBar from './components/Search-bar';
import Porsche from "./components/porsche";
import Mercedes from './components/Mersedes';
import Bmw from './components/Bmw';
import Ferrari from './components/Ferrari';

export default class App extends React.Component {
 render() {
  return (
    <div className="container">
      <div className="header">
        <SearchBar/>
      </div>
      <div className='cards-car-container'>
        <Porsche/>
        <Mercedes/>
        <Bmw/>
        <Ferrari/>
      </div>
    </div>
  )
 } 
}


  
 
