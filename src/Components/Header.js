import React, { useState, useEffect } from 'react';
import MovieMain from './MovieMain.js';
import './Header.css';

const Header = () => {

    const [search, setSearch ] = useState(null);

    const senData = ()=>{
        return search
    }

    return (
        <>
        <header className="header"
            style={{backgroundImage: "url('./images/header.jpg')"}}>
                <h1 className="font-bold text-white mb-10 text-4xl">Movies</h1>
                    <input className=" block w-1/2 bg-grey-lighter 
                    text-grey-darker border border-grey-lighter 
                    rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey" 
                    id="grid-password" type="search" placeholder="Search Movie...."
                    onKeyUp={(e) => {
                        if(e.keyCode === 13){ ;
                        return setSearch(e.target.value)}}}
                    />       
        </header>
        <MovieMain search={senData()}/>
        </>
    )
};


export default Header;
