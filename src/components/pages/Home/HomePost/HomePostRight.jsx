import React from 'react';
import { MdEdit } from 'react-icons/md';
import { GoLocation } from 'react-icons/go';
import { RiErrorWarningLine } from 'react-icons/ri';
import { Nav } from 'react-bootstrap';

const HomePostRight = () => {
    return (
        <div>
            <Nav variant="tabs" className='d-flex justify-content-between align-items-center mb-4'>
                <span ><GoLocation className='me-2'></GoLocation>
                    Nodia, India</span>
                <MdEdit className='justify-content-end'></MdEdit>
            </Nav>
            <RiErrorWarningLine></RiErrorWarningLine>
            <small className='ms-2'>
                Your location will help us serve better and extend a personalised experience.
            </small>
        </div>
    );
};

export default HomePostRight;