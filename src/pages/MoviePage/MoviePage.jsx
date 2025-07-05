import './MoviePage.css'
import '../HomePage/HomePage.css'
import dayjs from 'dayjs'
import { Header } from '../../Header/Header'
import {  useRef, useEffect } from 'react'
import {Link} from 'react-router-dom';


export function MoviePage(){
    const castitemRef = useRef(null);

    // mouse scroll
    
    useEffect(() => {
        const scrollRow = castitemRef.current;
        
        const handleWheel = (evt) => {
            if (Math.abs(evt.deltaX) === 0) {
                evt.preventDefault();
                scrollRow.scrollLeft += evt.deltaY * 9;
            }
        };
        
        scrollRow.addEventListener('wheel', handleWheel, { passive: false });
        
        return () => {
            scrollRow.removeEventListener('wheel', handleWheel);
        };
    }, []);

    // get movie info
    
    const movieInfo = JSON.parse(localStorage.getItem('movieInfo'));
    if (!movieInfo) {
                console.log('Movie not found');
                return <div>Movie not found.</div>;
                }
    const castData = movieInfo.casts;
    console.log(movieInfo, castData);

    // scroll btton

    const scrollLeft = () =>{
        castitemRef.current.scrollLeft -= 700;
    }
    const scrollRight = () =>{
        castitemRef.current.scrollLeft += 700;
    }

    // save movie

    const saveit = ()=>{
        const existing = JSON.parse(localStorage.getItem('savethismovie') || '[]');
        
        // Prevent duplicate entries
        const isAlreadySaved = existing.find(movie => movie.id === movieInfo.id);
        if (!isAlreadySaved) {
            existing.push(movieInfo);
            localStorage.setItem('savethismovie', JSON.stringify(existing));
        }
    }

    return(
        <>
            <Header/>

            <div className="mainContainerWrap" style={{backgroundImage: `url(${movieInfo.backdrop_path})`}}>
                <div className="mainContainer">
                    <div className="container1">
                        <div className="moviePoster"><img src={movieInfo.poster_path}/>
                        </div>
                        <div className="movieCall">
                            <p className="movieTitle2">{movieInfo.original_title}</p>
                            <div className='yrla'>
                                <p className="releaseYear2">{dayjs(movieInfo.release_date).format('YYYY')}</p>
                                <p className="language2">{movieInfo.original_language}</p>
                            </div>
                            <div className='rating'>
                                <i className="fa-brands fa-imdb"></i><p className="rating2">{movieInfo.vote_average}</p>
                                <i className="fa-solid fa-square-poll-vertical"></i><p className="votes2">{movieInfo.vote_count}</p>
                            </div>
                            <div className="options">
                                <button className="Watch"><i className="fa-solid fa-play"></i>Watch Free</button>
                                <Link to='/savedpage'><i className="fa-solid fa-bookmark" onClick={saveit}></i></Link>
                                <i className="fa-solid fa-circle-check"></i>
                                <i className="fa-solid fa-arrow-up-from-bracket"></i>
                            </div>

                            <p className='movieDescription'>{movieInfo.overview}</p>
                        </div>
                    </div>
                    <div className="container2">
                        <p className="titleCast">Cast of {movieInfo.original_title}</p>

                        <div className="arrow left" onClick={scrollLeft}><i className="fa-solid fa-arrow-left"></i></div> 
                        <div className="arrow right" onClick={scrollRight}><i className="fa-solid fa-arrow-right"></i></div> 
                        <div className="castItem" ref={castitemRef}>
                            {castData.map((castInfo)=>{
                                return(
                                    <div key={castInfo.id} className="single">
                                        <div className="PhotoContainer"><div className="castPhoto"><img src={castInfo.profile_path} alt="Profile"/></div></div>
                                        <div className="castDetails">
                                            <p className="castName">{castInfo.character}</p>
                                            <p className="RealName">{castInfo.original_name}</p>
                                        </div>
                                    </div>
                                )
                            })}
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}