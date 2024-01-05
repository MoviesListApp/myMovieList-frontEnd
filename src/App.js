// import React from 'react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Home from './components/Home/Home';
import FavoriteMovieList from './components/FavoriteMovieList/FavoriteMovieList';
import { Route, Routes } from 'react-router-dom';
import Banner from './components/Banner/Banner';
const my_api = process.env.REACT_APP_BASE_URL;


const App = () => {
  const [data, setData] = useState();

  console.log(`${my_api}/getAllTrendingMovies`);

  const getAllMovies = () => {
    axios.get(`${my_api}/getAllTrendingMovies`)
      .then(results => {
        // response.send(data.data);
        console.log(results.data);
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
    <div className="App">
      <Header setData={setData}/>
      <Banner />
      <Routes>
        <Route path='/' element={<Home data={data}/>} />
        <Route path='/favorite' element={<FavoriteMovieList  />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
