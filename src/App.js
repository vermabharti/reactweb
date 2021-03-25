import { render } from '@testing-library/react';
import React, { Component } from 'react'; 
import Routes from './route';

 class App extends Component {
   
  render(){
  return(
    <Routes/>
  );
}
}
 
export default App;