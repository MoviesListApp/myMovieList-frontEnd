import Modal from 'react-bootstrap/Modal';
import {Button} from 'react-bootstrap';
import axios from 'axios';
import {useRef} from 'react';

function Modals({cardInfo, show, handleClose}) {
    // console.log("CARRRRRRRRRRRRRRRD", cardInfo);
    const commentInputRef = useRef("");
    const addToFav = async ()=>{
        let comment = commentInputRef.current.value;
        // console.log("comment====================",comment); 
        let release_date = new Date();
        // console.log("release_dates=================", release_date);
       let favorite = {title:cardInfo.title, poster_path:cardInfo.poster_path, release_dates:`${release_date}`, overview:cardInfo.overview,comment:comment}
    //    console.log("favorite=====================",favorite);
      
       await axios.post('https://mymovies-backend-app.herokuapp.com/addMovie',favorite)
                  .then(()=>{
                      console.log("Complete :) ");
                  }).catch((err)=>{
                    //   console.log("THERE IS ERROR HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                      console.log(err);
                  });
  
   }
    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add To You Favorites</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body">
                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${cardInfo.poster_path}`} alt={cardInfo.title}/>
                    <h3>{cardInfo.title}</h3>
                    <div>
                        <p>{cardInfo.overview}</p>
                        <label htmlFor="op">Write Your Opinion :</label>
                        <input placeholder="Write Your Opinion" ref={commentInputRef} type="text" id="op" className='modal-input' />
                    </div>
                </Modal.Body>
                <Modal.Footer className="modal-bottom">
                    <Button variant="danger" onClick={()=>{
                        addToFav();
                        handleClose();
                    }}> Add To Favorite </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Modals;