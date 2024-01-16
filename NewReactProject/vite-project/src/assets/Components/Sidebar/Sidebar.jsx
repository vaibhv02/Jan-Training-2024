import React from 'react';
import { Nav } from 'react-bootstrap';

const AppSidebar = () => {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/features">Features</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
    </Nav>
  );
};

export default AppSidebar;
