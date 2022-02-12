import React, { useState, useEffect } from 'react';
import './App.css';
import Country from './Components/Country/Country';
import Cart from './Components/Cart/Cart';
import data from './Data/data.json';

function App() {

  const [countries, setCountries]= useState([]);
  const [cart, setCart] = useState([]);

  const [clubs, setClubs] = useState([]);
  useEffect ( () => {
    setClubs(data);

  }, [] )

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then (data => setCountries(data))
    .catch(error => console.log(error))
  }, [])

  const handleAddCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart);
  }


  return (
    <div className="App">
      <h1>Fake data : {clubs.length}</h1>
      <ul>
        {
          clubs.map(club => <li>{club.email}</li>)
        }
      </ul>



      <h1>Country loaded: {countries.length}</h1>
      <h3>Country Added: {cart.length}</h3>
      <Cart cart = {cart}></Cart>
      
        {
          countries.map(country => <Country country = {country} handleAddCountry = {handleAddCountry} key = {country.alpha3Code}></Country>)
        }
     


      
    </div>
  );
}

export default App;
