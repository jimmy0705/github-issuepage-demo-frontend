import React from 'react';
import axios from 'axios';

import { Button,Modal,Form } from 'react-bootstrap';


class PostForm extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.input = React.createRef(); 
      this.state = {modalState:true};
    }
  
    handleSubmit(event) {
    //   console.log(this.title.value);
        event.preventDefault();
        let issueData = {
            title:this.title.value,
            body:this.body.value,
            createdBy:this.createdBy.value
        }
        console.log(issueData);
        //axios post==//

        axios.post(`http://localhost:9000/api/issues`, { issueData })
      .then(res => {
        console.log(res);
        console.log(res.data);
        alert("succesfully submitted")
      })
      .catch(err => {
        console.log(err);
        alert("something went wrong ,, please try again")
        //res.send("not posted")
      });
        
    }
  
    render() {
      return (
        <Form className="issue-form" onSubmit={this.handleSubmit}>
        <Form.Group >
          <Form.Label>Title</Form.Label>
          <Form.Control id="title" ref={input=>(this.title=input)} type="text" placeholder="please write title here" name="title" required />
        </Form.Group>
      
        <Form.Group >
          <Form.Label>Issue</Form.Label>
          <Form.Control id="body" ref={input=>(this.body=input)} type="text" placeholder="write ur issue here" name="body" required />
        </Form.Group>
        <Form.Group >
        <Form.Label>Name</Form.Label>
          <Form.Control id="createdBy" ref={input=>(this.createdBy=input)} type="text" placeholder="write ur name here" name="createdBy" required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      );
    }
  }



  export default PostForm