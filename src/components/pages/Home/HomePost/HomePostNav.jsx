import React from 'react';
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { MdGroupAdd } from 'react-icons/md';
import { AiFillCaretDown } from 'react-icons/ai';

const HomePostNav = () => {
    return (
        <div>
            <Nav variant="tabs" defaultActiveKey="/home" className='justify-content-between'>
                <Nav>
                    <Nav.Item>
                        <Nav.Link className='text-black' to="/home">All Post</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='text-black' to="/">Article</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='text-black' to="/">Event</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='text-black' to="/">Education</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='text-black' to="/">Job</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Nav >
                    <div className='mx-3'>
                        <Button className='btn btn-light'>
                            Write a Post
                            <AiFillCaretDown className='ms-2'></AiFillCaretDown>
                        </Button>
                    </div>
                    <div className=''>
                        <Button className='btn btn-primary'>
                            <MdGroupAdd></MdGroupAdd>
                            <span className='ms-2 fw-semibold'>Join Group</span>
                        </Button>
                    </div>
                </Nav>

            </Nav>

        </div>
    );
};

export default HomePostNav;