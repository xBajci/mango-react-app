import React from 'react';
import {
  Navbar,
} from 'react-bootstrap';
import logo from './mango.png';

export default function Header() {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <img src={logo} alt=""/>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Navbar.Text>
          <strong>Yet another flight searching tool</strong>
        </Navbar.Text>
        <Navbar.Text pullRight />
      </Navbar.Collapse>
    </Navbar>
  );
}
