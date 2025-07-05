import './SavedPage.css';
import { Header } from '../../Header/Header';
import dayjs from 'dayjs'
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';



export function SavedPage(){

    const [savedMovies, setSavedMovie] = useState([]);

    useEffect(()=>{
        let data = JSON.parse(localStorage.getItem('savethismovie') || '[]');
        setSavedMovie(data);
    },[]);

    // const removemovie = (eachMovieData) =>{
    // }
    return(
        <>
            <Header/>
            <p className='sugessted'>My Watchlist</p>
            <div className='movieGrid'>
                {savedMovies && savedMovies.map((eachMovieData)=>{
                    return(
                        <div className="movieDetails" key={eachMovieData.id}>
                            <Link className='page2' to={`/moviepage`} onClick={()=>{localStorage.setItem('movieInfo', JSON.stringify(eachMovieData))}}>
                                <div className="imageContainer">
                                    <img src={eachMovieData.poster_path} alt="1"/>
                                </div>
                            </Link>
                            
                            <div className="detailContainer">
                                <div>
                                    <p className="movieTitle">{eachMovieData.original_title}</p>
                                    <p className="releaseYear">{dayjs(eachMovieData.release_date).format('YYYY')}</p>
                                </div> 
                                <i className="fa-solid fa-square-xmark" onClick={
                                ()=>{
                                    const id = eachMovieData.id;
                                    const newArray = [];
                                    savedMovies.forEach((element) => {
                                        if(element.id !== id){
                                            newArray.push(element);
                                        }
                                    });
                                    setSavedMovie(newArray);
                                    localStorage.setItem('savethismovie', JSON.stringify(newArray));
                                }
                                }></i>                             
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}