// import React from 'react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
// import FavoriteMovieList from './components/FavoriteMovieList/FavoriteMovieList';
import { Route, Routes } from 'react-router-dom';
// function App() {
//   return (
//     <div className="App">
{/* <Routes> */ }
 {/* <Route path='/favorite' element={<FavoriteMovieList/>} /> */ }
{/* <Route path='/getMovie/:id' element={<MovieDetails />}/> */ }
{/* </Routes> */ }
//     </div>
//     )
// }

// export default App
const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
 <Route path='/' element={<Home/>}/> 

      </Routes>
      <Footer />

    </div>
  );
}

export default App;
