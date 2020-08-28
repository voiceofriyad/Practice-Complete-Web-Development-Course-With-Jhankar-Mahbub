import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    name: "Dr. Mahfuz",
    job: "singer"
  }
  var style = {
    color: 'red',
    backgroundColor: 'yellow'
  }
  const name = ['rakib', 'kalam', 'Anwar']
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Edit <code>src/App.js</code> and save to reload. </p>
        <h1 style={{color: 'black', backgroundColor: 'cyan'}}>My Heading: {(2+5)*25+65}</h1>
        <h2 style={style}>My Heading 2: {person.name + " " + person.job}</h2>
        <p>My First react app.</p>  

        <Person></Person>   
        <Person></Person>   

        <Person2 name ='Masum' job='Cricket'></Person2>   
        <Person2 name='Hafiz' job='Football'></Person2>   
        <Person2 name= {name[1]} job='kabadi'></Person2>   
        <Person2 name= {name[0]} job='Hadudu'></Person2>   
      </header>
    </div>
  );
}

function Person(){

  const personStyle = {
    border: '2px solid yellow',
    margin: '10px'
  }

  return (
    <div style={personStyle}>
      <h1>Sakib Al Hasan</h1>
      <p>Hero of the year</p>
    </div>
  )

}

function Person2(props){
  return(
    <div style={{border:'3px solid green', backgroundColor:'yellow', color:'red', width: '400px', margin: '10px'}}>
      <p>Name: {props.name}</p>
      <p>Job: {props.job}</p>
    </div>
  )

}

export default App;
