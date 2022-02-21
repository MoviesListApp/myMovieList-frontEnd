import { Button,Card, Col } from 'react-bootstrap';
const Movie = (props) => {
    return ( 
        <Col md={3}>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${props.movie.poster_path}`} />
            <Card.Body>
                <Card.Title>{props.movie.title}</Card.Title>
                <Card.Text>
                {props.movie.overview}
                </Card.Text>
                <Button variant="danger" onClick={()=>{props.setCard(props.movie);props.setShow(true)} } >Add to Favorite</Button>
            </Card.Body>
        </Card>
    </Col>
     );
}
 
export default Movie;