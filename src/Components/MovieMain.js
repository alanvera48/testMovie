import React, {useEffect, useState } from 'react';
import { HelpFetch } from '../Helpers/HelpFetch.js';
import Loader from './Loader.js';
import Message from './Message.js';
import CardsMovies from './CardsMovies.js';
import './MovieMain.css';
import FilterStars from './FilterStar.js';

const MovieMain = ({search}) => {

	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [movies,setMovie] = useState();
	const [searched, setSearched] = useState();
	const [star, setStar] = useState(null);
	const [filter, setFilter] = useState();

	const url = `https://api.themoviedb.org/3/search/movie?api_key=1dd804edd47c29706d4b8d65e6e89e82&language=en-US&query=${search}&page=1&include_adult=false`;
	const api = HelpFetch();

	useEffect(()=>{
		setLoading(true);
		const DiscoveryMOvies = ()=>{
		HelpFetch()
		.GetDiscover().then(res=> {
		if(!res.err){			
			setMovie(res.results)
			setError(null);
		}else{
			setError(res)
		}

		setLoading(false);

		})

		};

		DiscoveryMOvies()

	},[])


  	useEffect((search)=>{

  		setLoading(true);

  		const SearchMovie = () =>{

  		HelpFetch()
  		.GetSearch(url).then(response=> {
 		if(!response.err){			
 			setSearched(response.results)
 		}
 		setLoading(false);
 
 		 })
 		};
 		SearchMovie();
  
  	},[search])


	useEffect(()=>{

	setLoading(true);

	const Filter = ()=>{
		HelpFetch()
		.GetDiscover().then(res=> {

		if(!res.err){

			let data = res.results.filter(el => el.vote_average <= star )
			
			setFilter(data)
			
			setError(null);
		}else{
			setError(res)
		}

		setLoading(false);

		})

		};
	Filter()

	},[star])

    return (

    	<div className="contenedor">
	
    		{loading && <Loader></Loader>}
			{error && <Message msg={`Error ${error.status_code}: ${error.status_message}`} bgColor="#dc3545"></Message>}
    		<div className="container-movies">
				{!search || search == " " ? ( movies && <CardsMovies movies={movies}/>) : 
				(<CardsMovies movies={searched} />)}
 			</div>
 			<div className="filter">
 				<div className="stars-filter">
        			<span className="text-gray-600">Rating</span>
        			<ul>
        				<i className="fas fa-star" name="2" onClick={(e)=>{setStar(e.target.getAttribute("name"))}}></i>
        				<i className="fas fa-star" name="4" onClick={(e)=>{setStar(e.target.getAttribute("name"))}}></i>
        				<i className="fas fa-star" name="6" onClick={(e)=>{setStar(e.target.getAttribute("name"))}}></i>
        				<i className="fas fa-star" name="8" onClick={(e)=>{setStar(e.target.getAttribute("name"))}}></i>
        				<i className="fas fa-star" name="10" onClick={(e)=>{setStar(e.target.getAttribute("name"))}}></i>
        			</ul>
        		</div>
        		<ul className="filter-ul">
        			{!filter ? <p className="not-fouded">Select Range</p> : (filter && <FilterStars filter={filter}></FilterStars>)}
        		</ul>
 			</div>
    	</div>
    )
};


export default MovieMain;


	