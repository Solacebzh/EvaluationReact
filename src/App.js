import Search from './Search.js'
import SerieList from './SerieList.js'
import './App.css'
import { useState, useEffect } from 'react'
export default function App(){
    const [showsData, SetShowsData] = useState([]);
    useEffect(()=> {
    fetch('http://localhost:4000/rest/shows')
      .then(response => response.json())
      .then(show => SetShowsData(show))
    }, [])
    
    return(
        <div className="main">
            <header className="App-header">
                <h1 className="title">Plateforme NETFLI</h1>
            </header>
            <main>
                <section>
                <Search/>
                    <SerieList series={showsData}/>
                </section>
            </main>
        </div>
    )
}