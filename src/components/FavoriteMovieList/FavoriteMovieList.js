'use strict';
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import UpdateModal from '../FavoriteMovieList/UpdateModal/UpdateModal';
import { Button } from 'react-bootstrap';
import './FavoriteMovieList.css';
const my_api = process.env.REACT_APP_BASE_URL;

const FavoriteMovieList = () => {
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [value, setValue] = useState({});
    const [title, setTitleInput] = useState("");
    const [image, setImageInput] = useState("");
    const [comment, setCommentInput] = useState("");
    const handleClose = () => setShow(false);

    const MyFavMovie = () => {
        axios.get(`${my_api}/getMoviesDataBase`).then(results => {
            // console.log("results====================", results.data);
            setData(results.data);
        }).catch((err) => {
            console.log(err);
        })
    }
    useEffect(() => {
        MyFavMovie();
    }, [])

    const deleteFromMyFav = async (id) => {
        await axios.delete(`${my_api}/DELETE/${id}`)
            .then(() => {
                MyFavMovie();
            }).catch((err) => {
                console.log(err);
            })
    }
    // console.log("data=============", data);

    return (
        <>
            <Container id="sec2" className="div-container">
                <Row md={3}>
                    {
                        data && data.map((value) => {
                            // console.log("data============2", data);
                            return (<Col md={3} >
                                <Card className="card2" style={{ width: '20.2rem' }}>
                                    <Card.Img variant="top" src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${value.poster_path}`} />
                                    <Card.Body className="stel">
                                        <Card.Title style={{width: '310px', fontSize: '19px'}}>{value.title}</Card.Title>
                                        <Card.Text>
                                            <p >{value.overview}</p>
                                            {/* <br/> */}
                                        </Card.Text>
                                        <Card.Header>{value.comment || "Nothing To Comment"}</Card.Header>
                                    </Card.Body>
                                    <div className="dev">
                                    <Button className='div-card-button' variant="primary"
                                                onClick={() => {
                                                    setShow(true)
                                                    setValue(value);
                                                    setTitleInput(value.title);
                                                    setCommentInput(value.comment);
                                                    setImageInput(value.poster_path);
                                                }}
                                            >Update</Button>
                                        <Button className='div-card-button' variant="danger"
                                                onClick={() => deleteFromMyFav(value.id)}
                                            >Delete</Button>
                                    </div>
                                </Card>
                            </Col>)
                        })
                    }


                </Row>
            </Container>

            {
                !data.length && <div><h2>No Such Results, Please try again later</h2></div>
            }

            {
                <UpdateModal show={show} handleClose={handleClose} data={value} getFavMovies={MyFavMovie}
                    titleInput={title}
                    setTitleInput={setTitleInput}
                    imageInput={image}
                    setImageInput={setImageInput}
                    commentInput={comment}
                    setCommentInput={setCommentInput}
                />
            }

        </>

    );









}

export default FavoriteMovieList;