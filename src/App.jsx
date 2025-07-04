import { HomePage } from './pages/HomePage/HomePage'
import { MoviePage } from './pages/MoviePage/MoviePage'
import { MoviesPage } from './pages/MoviesPage/MoviesPage'
import { Routes, Route } from 'react-router'
import { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'

function App() {
    const [movieData, setMovieData] = useState([]); 

    const loadData = async () => {
        const response = await axios.get('https://jsonfakery.com/movies/paginated');
        console.log(response.data.data);
        setMovieData(response.data.data);
    }

    useEffect(()=>{
        loadData();
    },[]);


    return(
        <Routes>
            <Route index element={<HomePage movieData={movieData} />}/>
            <Route path='moviepage' element={<MoviePage movieData={movieData} />}/>
            <Route path='moviespage' element={<MoviesPage movieData={movieData} />}/>
        </Routes>
    )
}

export default App
