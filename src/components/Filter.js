import React from 'react';

import { DropdownButton ,Dropdown} from 'react-bootstrap';
import './common.css'



function Filter() {
  return (
    <div className="filter" >
     <DropdownButton  id="dropdown-item-button" title="Filters">
  <Dropdown.ItemText>Filter Issues</Dropdown.ItemText>
  <Dropdown.Item as="button">Show all</Dropdown.Item>
  <Dropdown.Item as="button">is Open</Dropdown.Item>
  <Dropdown.Item as="button">is Closed</Dropdown.Item>
</DropdownButton>
    </div>
  );
}

export default Filter;
