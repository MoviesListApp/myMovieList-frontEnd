import MovieList from '../MovieList/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';

// const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;


const Home = ({data}) => {

  return (
    <div id="sec1">
      {data && <MovieList data={data} />
      }      
    </div>
  );
}

export default Home;