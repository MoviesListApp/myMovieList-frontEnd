import { useState } from "react";
import Movie from "../Movie/Movie";
import { Container, Row } from 'react-bootstrap';
import  Modals from "../Modal/Modal";
import './MovieList.css'

const MovieList = ({ data }) => {

    const [cardInformation, setCardInformation] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = ()=>{
        setShow(false);
    }

    return (
        <>
        <Container  className="div-container">
            <Row md={3} className="main">
                {
                    data.map((movie) => {
                        return <Movie movie={movie} key={movie.id} setCard={setCardInformation} setShow={setShow} />
                    })}
            </Row>
        </Container>
         
            <Modals cardInfo={cardInformation} show={show} handleClose={handleClose} />
        
        {
                    !data.length && <div><h2>There Is No Results, Please try again later</h2></div>
        }
        </>
    );
}

export default MovieList;