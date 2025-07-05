import './MoviesPage.css'
import '../HomePage/HomePage.css'
import dayjs from 'dayjs'
import {Link} from 'react-router-dom';
import { Header } from '../../Header/Header';



export function MoviesPage({movieData}){
    return(
        <>
            <Header></Header>
            <p className='sugessted'>What's On Now</p>
            <div className='movieGrid'>
                {movieData && movieData.map((eachMovieData)=>{
                    return(
                        <div className="movieDetails3" key={eachMovieData.id}>
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
        </>
    )
}