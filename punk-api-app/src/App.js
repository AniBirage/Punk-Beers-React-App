import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import BeerList from './components/BeerList';
import SearchBar from './components/SearchBar';

const App = () => {
  const [beers, setBeers] = useState([]);
  const [filteredBeers, setFilteredBeers] = useState([]);

  useEffect(() => {
    axios.get('https://api.punkapi.com/v2/beers')
      .then(response => {
        setBeers(response.data);
        setFilteredBeers(response.data);
      })
      .catch(error => console.error(error));
    document.title = "Punk Beers";
  }, []);

  const handleSearch = (query) => {
    const filtered = beers.filter(beer => beer.name.toLowerCase().includes(query.toLowerCase()));
    setFilteredBeers(filtered);
  };

  return (
    <div className="App">
      <h1>Punk Beers</h1>
      <SearchBar handleSearch={handleSearch} />
      <BeerList beers={filteredBeers} />
    </div>
  );
};

export default App;