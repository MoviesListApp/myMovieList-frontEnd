'use strict';
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import UpdateModal from '../FavoriteMovieList/UpdateModal/UpdateModal';
import {Button} from 'react-bootstrap';

const FavoriteMovieList = () => {
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [value, setValue] = useState({});
    const [title, setTitleInput] = useState("");
    const [image, setImageInput] = useState("");
    const [comment, setCommentInput] = useState("");
    const handleClose = ()=> setShow(false);

    const MyFavMovie =  () => {
        axios.get('https://mymovies-backend-app.herokuapp.com/getMoviesDataBase').then(results => {
            console.log("results====================", results.data);
            setData(results.data);
        }).catch((err) => {
            console.log(err);
        })
    }
    useEffect(() => {
        MyFavMovie();
    }, [])

    // const deleteFromMyFav = async (id) => {
    //     await axios.delete(`https://mymovies-backend-app.herokuapp.com//DELETE/${id}`)
    //         .then(() => {
    //             MyFavMovie();
    //         }).catch((err) => {
    //             console.log(err);
    //         })
    // }
    console.log("data=============", data);

    return (
        <>
            <Container className="div-container">
                <Row md={3}>
                    {
                        data.length && data.map((value) => {
                            console.log("data============2",data);
                            <Col md={6} key={value.id}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${value.poster_path}`} />
                                    <Card.Body>
                                        <Card.Title>{value.title}</Card.Title>
                                        <Card.Text>
                                        {value.overview}
                                        </Card.Text>
                                        {/* <Button className='div-card-button' variant="primary"
                                                onClick={() => {
                                                    setShow(true)
                                                    setValue(value);
                                                    setTitleInput(value.title);
                                                    setCommentInput(value.comment);
                                                    setImageInput(value.movies_path);
                                                }}
                                            >Update</Button> */}
                                            {/* <Button className='div-card-button' variant="danger"
                                                onClick={() => deleteFromMyFav(value.id)}
                                            >Delete</Button> */}
                                    </Card.Body>
                                </Card>
                            </Col>
                        })
                    }


                </Row>
            </Container>

            {
                !data.length && <div><h2>No Such Results, Please try again later</h2></div>
            }

            {/* {
                <UpdateModal show={show} handleClose={handleClose} data={value} getFavRecipes={MyFavMovie}
                    titleInput={title}
                    setTitleInput={setTitleInput}
                    imageInput={image}
                    setImageInput={setImageInput}
                    commentInput={comment}
                    setCommentInput={setCommentInput}
                />
            } */}

        </>

    );









}

export default FavoriteMovieList;