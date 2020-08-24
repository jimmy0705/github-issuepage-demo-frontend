import React from 'react';

import { DropdownButton ,Dropdown,Form} from 'react-bootstrap';
import './common.css'



function Filter() {
  return (
    <div className="filter" >
     {/* <DropdownButton  id="dropdown-item-button" title="Filters">
  <Dropdown.ItemText>Filter Issues</Dropdown.ItemText>
  <Dropdown.Item as="button">Show all</Dropdown.Item>
  <Dropdown.Item as="button">is Open</Dropdown.Item>
  <Dropdown.Item as="button">is Closed</Dropdown.Item>
</DropdownButton> */}
<Form>
  <Form.Group controlId="exampleForm.SelectCustom">
    {/* <Form.Label>Filter here</Form.Label> */}
    <Form.Control className="filter" as="select" custom>
      <option>Show all</option>
      <option>is Open</option>
      <option>is Closed</option>
     
    </Form.Control>
  </Form.Group>
</Form>
    </div>
  );
}

export default Filter;
