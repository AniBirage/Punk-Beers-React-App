import React from 'react';
import './BeerCard.css';

const BeerCard = ({ beer }) => {
    return (
        <div className="beer-card">
            <img className="beer-image" src={beer.image_url} alt={beer.name} />
            <div className="beer-info">
                <h3 className="beer-name">{beer.name}</h3>
                <p className="beer-tagline">{beer.tagline}</p>
            </div>
        </div>
    );
};

export default BeerCard;