import { Button,Card, Col } from 'react-bootstrap';
const Movie = (props) => {
    let movie = props.movie;
    return ( 
        <Col md={3}>
        <Card className='card1' style={{ width: '19.3rem' }}>
            <Card.Img variant="top" src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} />
            <Card.Body>
                <Card.Title>{movie.title || "Movie"}</Card.Title>
                <Card.Text>
                {movie.overview}
                </Card.Text>
                <Button variant="danger" onClick={()=>{props.setCard(movie);props.setShow(true)} } >Add to Favorite</Button>
            </Card.Body>
        </Card>
    </Col>
     );
}
 
export default Movie;