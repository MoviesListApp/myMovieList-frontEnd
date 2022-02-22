import MovieList from '../MovieList/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = ({data}) => {

  return (
    <div id="sec1">
      {data && <MovieList data={data} />
      }      
    </div>
  );
}

export default Home;