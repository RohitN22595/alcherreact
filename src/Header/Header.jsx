import './Header.css'
import {Link} from 'react-router-dom';


export function Header(){
    return(
        <>
            <div className="header">
                <div className="logocontainer"><Link to="/"><img src="images//02835bd1011d0e4a361708d386ff8689.jpg"/></Link></div>
                <div className="searchBox">
                    <input className="searchBar" type="text"/>
                    <button className="searchButton"><img src="images/vecteezy_magnifying-glass-or-search-icon-flat-graphic-on-isolated_-removebg-preview.png"/></button>
                </div>
                <div className="typeBox">
                    <Link to='/'><div className="homeBox"><i className="fa-solid fa-house"></i>Home</div></Link>
                    <div className="tvBox"><i className="fa-solid fa-tv"></i>Live TV</div>
                    <div className="demandBox"><i className="fa-solid fa-display"></i>On Demand</div>
                    <Link to="/moviespage"><div className="discoverBox"><i className="fa-solid fa-compass"></i>Discover</div></Link>
                </div>
                <div className="other">
                    <div className="screenShare"><i className="fa-solid fa-play"></i></div>
                    <Link to="/savedpage"><div className="saveLater"><i className="fa-solid fa-bookmark"></i></div></Link>
                    <button className="signIn">Sign In</button>
                </div>
            </div>
        </>
    )
}