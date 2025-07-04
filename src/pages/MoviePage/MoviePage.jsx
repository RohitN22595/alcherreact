import './MoviePage.css'
import '../HomePage/HomePage.css'
import dayjs from 'dayjs'
import { Header } from '../../Header/Header'


export function MoviePage(){
    const movieInfo = JSON.parse(localStorage.getItem('movieInfo'));
    if (!movieInfo) {
                console.log('Movie not found');
                return <div>Movie not found.</div>;
                }
    const castData = movieInfo.casts;
    console.log(movieInfo, castData);

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
                                <i className="fa-solid fa-bookmark"></i>
                                <i className="fa-solid fa-circle-check"></i>
                                <i className="fa-solid fa-arrow-up-from-bracket"></i>
                            </div>

                            <p className='movieDescription'>{movieInfo.overview}</p>
                        </div>
                    </div>
                    <div className="container2">
                        <p className="titleCast">Cast of {movieInfo.original_title}</p>

                        <div className="arrow left"><i className="fa-solid fa-arrow-left"></i></div> 
                        <div className="arrow right"><i className="fa-solid fa-arrow-right"></i></div> 
                        <div className="castItem">
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