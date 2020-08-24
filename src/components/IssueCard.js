import React from 'react';

import './common.css'

import { Card,Row,Col } from 'react-bootstrap';

function IssueCard({issue}) {
  console.log(issue)

  {var d=new Date(issue.createdAt)}
  return (
    <div className="Card" style={{borderRadius:0}}>
      <Card>
  <Card.Body>
  <Row>
  <Col sm={10}><span>{issue.status ? <svg className="octicon octicon-issue-opened open" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path  d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path></svg>
    :<svg className="octicon octicon-issue-closed closed" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path  d="M1.5 8a6.5 6.5 0 0110.65-5.003.75.75 0 00.959-1.153 8 8 0 102.592 8.33.75.75 0 10-1.444-.407A6.5 6.5 0 011.5 8zM8 12a1 1 0 100-2 1 1 0 000 2zm0-8a.75.75 0 01.75.75v3.5a.75.75 0 11-1.5 0v-3.5A.75.75 0 018 4zm4.78 4.28l3-3a.75.75 0 00-1.06-1.06l-2.47 2.47-.97-.97a.749.749 0 10-1.06 1.06l1.5 1.5a.75.75 0 001.06 0z"></path></svg> }</span><h4>{issue.title}</h4>
     <a href="https://github.com/github/hub/issues/2431" target="_blank">issue link here</a>
     <p>{d.toLocaleString()}</p>
  </Col>
    <Col sm={2}>
      <div className="svg-icon1">
        {`created by: ${issue.createdBy}`}
      </div>
    </Col>
  </Row>

  </Card.Body>
</Card>
    </div>
  );
}

export default IssueCard;
