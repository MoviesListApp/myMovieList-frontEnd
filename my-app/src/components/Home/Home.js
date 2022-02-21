// import { request, response } from 'express'
// import React from 'react'
import axios from 'axios';
import MovieList from '../MovieList/MovieList';
import { useState, useEffect } from 'react'
// const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;


const Home = () => {
  const [data, setData] = useState();


  const getAllMovies =  () => {
     axios.get('https://mymovies-backend-app.herokuapp.com/getAllTrendingMovies')
      .then(results => {
        // response.send(data.data);
        // console.log(results.data);
        // return results.data;
        setData(results.data)
      }).catch((err) => {
        console.log(err);
      })
  }
  // console.log(getAllMovies);
  useEffect(() => {
    getAllMovies();
    // let allData = getAllMovies();
    // console.log(allData);
    // setData(allData);
  }, []);
  // console.log("data====================" + data);

  return (
    <div>
      {data && <MovieList data={data} />
      }      
      {/* <h1>fdehtdhfghgfhgfffffffffffffffffffffffn</h1> */}
    </div>
  );
}

export default Home;