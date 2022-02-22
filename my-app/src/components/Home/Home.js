// import { request, response } from 'express'
// import React from 'react'
import axios from 'axios';
import MovieList from '../MovieList/MovieList';
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

// const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;


const Home = ({data}) => {

  return (
    <div id="sec1">
      {data && <MovieList data={data} />
      }      
      {/* <h1>fdehtdhfghgfhgfffffffffffffffffffffffn</h1> */}
    </div>
  );
}

export default Home;