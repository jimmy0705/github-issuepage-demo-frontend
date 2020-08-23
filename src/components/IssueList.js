import React from 'react';
import './common.css'
import IssueCard from './IssueCard'

import { Card,Row,Col } from 'react-bootstrap';

function IssueList({issues}) {
  console.log(issues)
  return (
    <div className="Issue-list">
        {issues.map(issue=><IssueCard issue={issue} key={issue._id}/>)}

    </div>
  );
}

export default IssueList;
