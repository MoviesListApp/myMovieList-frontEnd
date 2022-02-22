import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import {useState} from 'react';
import axios from 'axios';

function UpdateModal( {show,handleClose,data,getFavMovies, titleInput,
    setTitleInput,
    imageInput,
    setImageInput,
    commentInput,
    setCommentInput}){    

    const update = async(id)=>{

        let updated = {comment:commentInput}
        
      await axios.put(`https://mymovies-backend-app.herokuapp.com/UPDATE/${id}`,updated)
                  .then((newdata)=>{
                    //   console.log(newdata);
                    getFavMovies();
                  }).catch(err=>{
                      console.log(err);
                  })
    }


    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Updates Your Favorites</Modal.Title>
                </Modal.Header>
                <Modal.Body id="body">
                    <div>
                        <label style={{marginRight: "15px"}}>Edite Title</label>
                        <input value={titleInput} 
                         onChange={(e) => setTitleInput(e.target.value)} className="update-modal-input"
                        /><br></br>
                        <label style={{ "marginTop": "25px", marginRight: "5px" }}>Edit Image</label>
                        <input value={imageInput} 
                            onChange={(e) => setImageInput(e.target.value)} className="update-modal-input"
                        />
                    </div>
                    <div>
                        <label style={{marginLeft: "-30px", marginRight: "13px"}} htmlFor="op">Any Ideas!</label>
                        <textarea style={{marginTop: "25px"}} value={commentInput} 
                            onChange={(e) => setCommentInput(e.target.value)} 
                        placeholder="Give Me Your Opinion" type="text" id="op" 
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger"
                     onClick={()=>{
                        update(data.id);
                        handleClose();
                     }}
                    >
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default UpdateModal;


