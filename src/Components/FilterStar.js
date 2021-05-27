import React, {  } from 'react';
import './FilterStar.css';

const FilterStars = ({ filter }) => {
    return (
    	  <>
    	   { filter.length > 0  ? (filter.map(element=> <li key={element.id} className="li-filter text-red-500">{`- ${element.title}`}</li>   )) :
    	    (<p className="not-fouded">Not Average to show</p>)
            }
		</>
        
    );
};



export default FilterStars;
