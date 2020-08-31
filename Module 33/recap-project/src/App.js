import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks =['Khan Ataur Rahman', 'Farooque', 'Humayun Faridi']
  const nayoks2 =[{name :'Khan Ataur Rahman', age : 82}, {name :'Farooque', age : 76}, {name :'Humayun Faridi', age : 72}, {name :'Alamgir', age :85}, {name :'Misha Sawdagor', age : 89}, {name :'Riaz', age : 92}]

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then (res => res.json())
    .then (data => setUsers(data))

  }, [])
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Nayok name={nayoks[0]} age='56'></Nayok>
        <Nayok name={nayoks[1]}></Nayok>
        <Nayok name= 'Abul Khair'></Nayok>
        <Nayok name={nayoks[2]} age='38'></Nayok>

        <MovieCounter></MovieCounter>

        {
          nayoks2.map(nayok => <li>{nayok.age}</li>)
        }

        {
          nayoks2.map(nk => <Nayok2 name = {nk.name} age = {nk.age}></Nayok2>)
        }

        <ul>
          {
            users.map(user => <li>{user.email}</li>)
          }
        </ul>

        <Fetch></Fetch>
        
      </header>
    </div>
  );
}

function Nayok(props){
  const nayokStyle = {
    border: '2px solid tomato',
    borderRadius: '10px',
    margin: '10px',
    padding: '20px'
  }

  return(
    <div style={nayokStyle}>
      <h1>Ami Nayok {props.name}</h1>
      <h3>I have done 5 movies in {props.age || 30} years</h3>

    </div>
  )
}

function MovieCounter(){

  const [count, setCount] = useState(0);

  return(
    <div>
      <button onClick = {() => setCount(count + 1)}>
        Add Movie
      </button>
      <h3>Number of movies: {count} </h3>
      <MovieDisplay movie={count}></MovieDisplay>
      <MovieDisplay movie={count + 20}></MovieDisplay>
      <MovieDisplay movie={count * 30}></MovieDisplay>
    </div>
  )
}

function MovieDisplay(props){
  return <h4>Number of movies I acted: {props.movie} </h4>
}

function Nayok2(props){
  const nayokStyle = {
    border: '2px solid tomato',
    borderRadius: '10px',
    margin: '10px',
    padding: '20px'
  }

  return(
    <div style={nayokStyle}>
      <h1>Ami Nayok {props.name}</h1>
      <h3>I have done 5 movies in {props.age || 30} years</h3>

    </div>
  )
}

function Fetch(){
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => setUser(data.results))
  }, [])

  return(

    <div>

      <ul>
        {
          user.map(people => <li>{people.cell}</li>)
        }
        {
          user.map(people => <li>{people.name.first}</li>)
        }
      </ul>

    </div> 

  )
}


 

export default App;
