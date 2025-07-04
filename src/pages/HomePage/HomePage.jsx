import {Link} from 'react-router-dom';
import './HomePage.css'
import { Header } from '../../Header/Header';
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'

export function HomePage({movieData}){
    const [bgImage, setBgImage] = useState(null);
    

    useEffect(()=>{
        const backdropImages = movieData.map(movie => movie.backdrop_path);

        if (backdropImages.length === 0) return;

        // setBgImage(backdropImages[0]);

        let index = 0;

        setInterval(()=>{
            index = (index + 1) % backdropImages.length; // loop back to start
            setBgImage(backdropImages[index]);
        },4000)
    },[movieData])

    return(
        <>
            <Header/>

            <div className="trilerWrap" style={{backgroundImage: `url(${bgImage})`}}>
                <div className="triler">
                    <div className="trilerInfo">
                        <h1>Wanna watch free <br/> movies & TV?</h1>
                        <p>You've come to the right place. We've got a bunch here at <br/> Plex and you can start watching right now.</p>
                        <button>Sign Up</button>
                    </div>
                </div>
            </div>
            
            <div className="container">
                <div className="titletype"><h2>Suggested</h2><Link to={'/moviespage'}><i className="fa-solid fa-arrow-right"></i></Link></div>
                <div className="arrow left"><i className="fa-solid fa-arrow-left"></i></div> 
                <div className="arrow right"><i className="fa-solid fa-arrow-right"></i></div> 
                <div className="row">
                        {movieData && movieData.map((eachMovieData)=>{
                            return(
                                <div className="movieDetails" key={eachMovieData.id}>
                                    <Link className='page2' to={`/moviepage`} onClick={()=>{localStorage.setItem('movieInfo', JSON.stringify(eachMovieData))}}>
                                        <div className="imageContainer">
                                            <img src={eachMovieData.poster_path} alt="1"/>
                                        </div>
                                    </Link>
                                    <div className="detailContainer">
                                        <p className="movieTitle">{eachMovieData.original_title}</p>
                                        <p className="releaseYear">{dayjs(eachMovieData.release_date).format('YYYY')}</p>
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </div>
        </>
    )
}