import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ handleSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(query);
    };

    return (
        <div className="search-bar-container">
            <form onSubmit={handleSubmit} className="search-bar">
                <input
                    type="text"
                    placeholder="Search Beers"
                    value={query}
                    onChange={handleChange}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchBar;