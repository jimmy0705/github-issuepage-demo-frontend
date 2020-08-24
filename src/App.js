import React from 'react';
import axios from 'axios';
//import logo from './logo.svg';
//import './App.css';
//import 'semantic-ui-css/semantic.min.css'
import { Container,Row,Col } from 'react-bootstrap';
//import _sortBy from '../node_modules/lodash.sortby'

import 'bootstrap/dist/css/bootstrap.min.css';
import IssueList from './components/IssueList'
import AddButton from './components/AbbButton'
import Filter from './components/Filter'


// console.log(_sortBy)
//dummy data 

const data = [
  {
      "_id": "5f42218b8cac1c3472bb0167",
      "title": "new issue",
      "status": true,
      "createdBy": "juned",
      "body": "here goes the describtion of the github issue",
      "createdAt": "2020-08-23T07:58:03.225Z",
      "updatedAt": "2020-08-23T07:58:03.225Z",
      "__v": 0
  },
  {
      "_id": "5f4222c4c8591c3507cc7a2f",
      "title": "2nd issue",
      "status": false,
      "createdBy": "jimmy",
      "body": "here goes the describtion of the github issue",
      "createdAt": "2020-08-23T08:03:16.369Z",
      "updatedAt": "2020-08-23T08:03:16.369Z",
      "__v": 0
  },
  {
      "_id": "5f422506d3758e369adc4972",
      "title": "Amit issue",
      "status": true,
      "createdBy": "Amit",
      "body": "Bhai mere deemag kaam nahin kar raha hai",
      "createdAt": "2020-08-23T08:12:54.617Z",
      "updatedAt": "2020-08-23T08:12:54.617Z",
      "__v": 0
  },
  {
      "_id": "5f422561d8b42236f3721e9e",
      "title": "Amit issue",
      "status": false,
      "createdBy": "Amit",
      "body": "Bhai mere deemag kaam nahin kar raha hai",
      "createdAt": "2020-08-23T08:14:25.321Z",
      "updatedAt": "2020-08-23T08:14:25.321Z",
      "__v": 0
  },
  {
      "_id": "5f422564d8b42236f3721e9f",
      "title": "Amit issue",
      "status": true,
      "createdBy": "Amit",
      "body": "Bhai mere deemag kaam nahin kar raha hai",
      "createdAt": "2020-08-23T08:14:28.952Z",
      "updatedAt": "2020-08-23T08:14:28.952Z",
      "__v": 0
  },
  {
      "_id": "5f422565d8b42236f3721ea0",
      "title": "Amit issue",
      "status": false,
      "createdBy": "Amit",
      "body": "Bhai mere deemag kaam nahin kar raha hai",
      "createdAt": "2020-08-23T08:14:29.822Z",
      "updatedAt": "2020-08-23T08:14:29.822Z",
      "__v": 0
  },
  {
      "_id": "5f422566d8b42236f3721ea1",
      "title": "Amit issue",
      "status": false,
      "createdBy": "Amit",
      "body": "Bhai mere deemag kaam nahin kar raha hai",
      "createdAt": "2020-08-23T08:14:30.601Z",
      "updatedAt": "2020-08-23T08:14:30.601Z",
      "__v": 0
  },
  {
      "_id": "5f422567d8b42236f3721ea2",
      "title": "Amit issue",
      "status": true,
      "createdBy": "Amit",
      "body": "Bhai mere deemag kaam nahin kar raha hai",
      "createdAt": "2020-08-23T08:14:31.355Z",
      "updatedAt": "2020-08-23T08:14:31.355Z",
      "__v": 0
  },
  {
      "_id": "5f422568d8b42236f3721ea3",
      "title": "Amit issue",
      "status": false,
      "createdBy": "Amit",
      "body": "Bhai mere deemag kaam nahin kar raha hai",
      "createdAt": "2020-08-23T08:14:32.070Z",
      "updatedAt": "2020-08-23T08:14:32.070Z",
      "__v": 0
  },
  {
      "_id": "5f422569d8b42236f3721ea5",
      "title": "Amit issue",
      "status": true,
      "createdBy": "Amit",
      "body": "Bhai mere deemag kaam nahin kar raha hai",
      "createdAt": "2020-08-23T08:14:33.181Z",
      "updatedAt": "2020-08-23T08:14:33.181Z",
      "__v": 0
  },
  {
      "_id": "5f422569d8b42236f3721ea6",
      "title": "Amit issue",
      "status": false,
      "createdBy": "Amit",
      "body": "Bhai mere deemag kaam nahin kar raha hai",
      "createdAt": "2020-08-23T08:14:33.565Z",
      "updatedAt": "2020-08-23T08:14:33.565Z",
      "__v": 0
  }
]

class App extends React.Component{

  state={
   issues:[],
   filter:"all"
  }


  // componentDidMount(){
  //   // this.setState({issues:data})
  // }

  componentDidMount() {
    axios.get(`http://localhost:9000/api/issues`)
      .then(res => {
        const data1 = res.data;
        this.setState({ issues:data1 });
      })
      .catch(err => {
        console.log(err);
        //res.send("not posted")
      });
  }

  render(){
    
    
    return (
      <Container>
        <Row>
    <Col sm={8}><Filter/></Col>
      <Col style={{textAlign:"right"}} sm={4}><AddButton/></Col>
    </Row>
        
        
      <IssueList issues ={this.state.issues}/>
      </Container>
    );
  }

 
}

export default App;
