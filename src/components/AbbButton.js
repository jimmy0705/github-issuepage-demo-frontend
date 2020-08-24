import React,{useState} from 'react';



import { Button,Modal } from 'react-bootstrap';

const bttn = {
  textAlign:"right"
};


function AddButton() {
  // return (
  //   // <div style={bttn} className="add-btn">
  //   //   <Button variant="success">Add Issue</Button>
  //   // </div>
  // );

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Add Issue
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Submit Issue</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         {/* form goes here */}

         {/* form goes here */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddButton;
