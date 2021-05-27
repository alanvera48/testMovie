import React, { PropTypes } from 'react';
import Card from './Card.js';
import './CardsMovies.css';

const CardsMovies = ({movies}) => {
    return (
    	<>
    	   { movies.length > 0  ? (movies.map(element=>
    	   	<Card movie={element} key={element.id}></Card>)) : (<p className="not-fouded">Not Movies was Fouded</p>)
            }
		</>
    );
};

	

export default CardsMovies;
