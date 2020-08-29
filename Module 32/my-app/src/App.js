import React, {useState, useEffect} from 'react';
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
  const name = ['Rakib', 'Kalam', 'Anwar', 'Aslam']
  const products = [
    {name: 'Photoshop', price: '$120'},
    {name: 'Illustrator', price: '$86'},
    {name: 'PDF Reader', price: '$42'}
  ]
  
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

        <Product product ={products[0]}></Product>
        <Product product ={products[1]}></Product>
        <Product product ={products[2]}></Product>

        {
          products.map(pd => <Product product ={pd}></Product>)
        }

        <ul>
            {
              name.map(name => <li>{name}</li>)
            }
            {
              products.map(product => <li>{product.name}</li>)
            }
        </ul>

        <Counter></Counter>
        <Hook></Hook>
        <User></User>
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

function Product(props){
  const productStyle = {
    border: '1px solid, gray',
    borderRadius: '5px',
    width: '250px',
    height: '250px',
    backgroundColor: 'lightgray',
    margin: '10px'
  }

  const {name, price} = props.product;

  return(
    <div style={productStyle}>
      <h2>{name}</h2>
      <h3>{price}</h3>
      {/* <h2>{props.product.name}</h2>
      <h3>{props.product.price}</h3> */}
      <button>Buy Now</button>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(25);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase: </button>
      <button onClick={() => setCount(count - 1)}>Decrease: </button>
    </div>
  )

}

function Hook(){
  const [count, setCount] = useState(0);

  return(
    <div>
      <p>You clicked {count} times</p>
      <button onClick = {() => setCount(count + 1)}>
        
        Click me
      </button>
    </div>
  )
}

function User(){
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }

  )

  return(
    <div>
      <h3>Dynamic User: {users.length} </h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
      <ul>
        {
          users.map(user => <li>{user.phone}</li>)
        }
      </ul>
    </div>
  )

}

export default App;
