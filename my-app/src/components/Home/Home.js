// import { request, response } from 'express'
// import React from 'react'
import axios from 'axios';
import MovieList from '../MovieList/MovieList';
import { useState, useEffect } from 'react'
const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;


const Home = () => {
  const [data, setData] = useState();
  // let getAllMovies = (request, response) => {
  //   axios.get(`${REACT_APP_BASE_URL}getAllMovies`).then(data => {
  //     return data.data;
  //   }).catch((err) => {
  //     console.log(err);
  //   })
  // }
  // useEffect(() => {
  //   let allData = getAllMovies();
  //   console.log(allData);
  //   setData(allData);
  // }, []);
  // console.log("data===================="+data);

  return (
    <div>
      {/* <MovieList data={data} /> */}

      <h1>fdehtdhfghgfhgfffffffffffffffffffffffn</h1>
    </div>
  );
}

export default Home;