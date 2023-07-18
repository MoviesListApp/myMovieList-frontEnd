import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

const NavBar = ({setData}) => {

    const [loadingState, setLoadingState] = useState(false);
    const [query, setSearchQuery] = useState("");
    const [movies, setmovies] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");

    const searchHandler = (e) => {
        e.preventDefault();
        if (!query) {
            setErrorMsg("no search input please type what yo want to search for");
            return <span>input search required</span>;
          }
          try {
            setLoadingState(true);
            const moviesList =  getMoviesData(query, 15);
            setmovies(moviesList);
            if (!moviesList.length) {
              setErrorMsg("No Results Found");
            }
          } catch (err) {
            console.error(err);
          } finally {
            setLoadingState(false);
          }
        };
        
        const getMoviesData = async (querr, pageLimit = 3) => {
            // console.log("22222222222", querr);
           await axios.get(`https://movies-pnbq.onrender.com/search?query=${querr}`)
            .then(data => {
                // response.send(data.data);
                // console.log("1111111111111111111",data.data.results);
                setData(data.data.results);
            }).catch((err) => {
                console.log(err);
            })
        }
    return (
        <nav className="header-nav">
            <ul className="nav-list">
                <li className="nav-item nav-item-sign active"><Link to='/'>  Home </Link></li>
                <li className="nav-item nav-item-sign active"><Link to='/favorite '>  Favorite </Link></li>
            </ul>
            <form onSubmit={searchHandler} className="search-form">
                <input
                    name="searchQuery"
                    className="search-input"
                    type="text"
                    placeholder="Search Movie Name"
                    value={query}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button style={{marginleft: "15px", color: "white", backgroundColor: "#E50914"}} type='submit'>Search</Button>
            </form>
        </nav>
    )
}

export default NavBar