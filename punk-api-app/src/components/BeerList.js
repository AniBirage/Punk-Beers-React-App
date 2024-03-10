import React from 'react';
import BeerCard from './BeerCard';
import './BeerList.css';

const BeerList = ({ beers }) => {
    return (
        <div className="beer-list-container">
            <div className="beer-list">
                {beers.map((beer) => (
                    <BeerCard key={beer.id} beer={beer} />
                ))}
            </div>
        </div>
    );
};

export default BeerList;