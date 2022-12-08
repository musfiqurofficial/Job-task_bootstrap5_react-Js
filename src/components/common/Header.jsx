import React from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="white" expand="lg" className='shadow-sm'>
            <Container className=''>
                <Navbar.Brand href="#">ATG.WORLD</Navbar.Brand>
                <Form className="d-flex justify-content-center w-50 search-bar">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="icon ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>

                    <Form.Control
                        type="search"
                        placeholder="Search for your favorite groups in ATG"
                        className="rounded-pill search-form"
                        aria-label="Search"
                    />
                </Form>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar className="justify-content-end">
                    <button className='header-btn '>
                        Create account.  <a href="#login">It's free!</a>
                    </button>
                </Navbar>
            </Container>
        </Navbar>
    );
};

export default Header;