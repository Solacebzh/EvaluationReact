import React, { useEffect } from"react";
import { useState } from 'react';
import'./Search.css'
import Serie from './Serie'

export default function Search(props){
    const [showsData, SetShowsData] = useState([]);
    useEffect(()=> {
    fetch('http://localhost:4000/rest/shows')
      .then(response => response.json())
      .then(show => SetShowsData(show))
    }, [])
    const [searchTerm, setSearchTerm] = useState("");
    const handleSearchTerm = (e) =>{
        setSearchTerm()
        let value = e.target.value;
        setSearchTerm(value);
    }   
    return(
        <section className="searchbox-wrap">
            <input type="text"
                placeholder="Search for a movie..."
                className="searchbox"
                id="SearchBar"
                onChange={handleSearchTerm}/>
        <div className="search_results">
            {showsData.filter((val)=>{
                return val.title.toLowerCase().includes(searchTerm);
            })
            .map((val)=>{
                return(
                    <div className="search_result search container" key={val.id} ><Serie serie={val}/></div>
                )
            })}
            
        </div>
        </section>
    )
}

