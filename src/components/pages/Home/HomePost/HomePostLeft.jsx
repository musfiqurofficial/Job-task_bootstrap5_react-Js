import React from 'react';
import { GrArticle } from "react-icons/gr";
import { FiShare2 } from "react-icons/fi";
import { BsCalendarDate, BsEye, BsHandbagFill, BsThreeDots } from "react-icons/bs";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button, NavDropdown } from 'react-bootstrap';
import { GoLocation } from 'react-icons/go';

const HomePostLeft = () => {
    return (
        <div>
            <Row xs={1} md={1} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Header variant="top" className='card-imgs' />
                            <Card.Body>
                                <article>
                                    <GrArticle className='me-2'></GrArticle>
                                    Article
                                </article>
                                <div className='d-flex justify-content-between'>
                                    <Card.Title className='fw-bold fs-4  my-2'>What if famous brands had regular fonts? Meet RegulaBrands!
                                    </Card.Title>
                                    <NavDropdown title={<BsThreeDots />} id="nav-dropdown">
                                        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                </div>
                                <Card.Text className='fs-6'>
                                    I've worked in UX for the better part of a decade. From now on, I plan to rei…
                                </Card.Text>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div className='d-flex align-items-center '>
                                        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" style={{ width: " 50px" }}
                                            alt="Avatar" />
                                        <h6 className='fw-semibold ms-2'>Sarthak Kamra</h6>
                                    </div>
                                    <div className='d-flex align-items-center'>
                                        <div>
                                            <BsEye></BsEye>
                                            <small className='me-5'>1.4k views</small>
                                        </div>
                                        <button className='px-3 py-2 bg-light border border-0 shadow-sm'><FiShare2></FiShare2></button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <div className='my-4'>
                <Card>
                    <Card.Header variant="top" className='card-img' />
                    <Card.Body>
                        <article>
                            <GrArticle className='me-2'></GrArticle>
                            Meetup
                        </article>
                        <div className='d-flex justify-content-between my-2'>
                            <Card.Title className='fw-bold fs-4'>Finance & Investment Elite Social Mixer @Lujiazui</Card.Title>
                            <NavDropdown title={<BsThreeDots />} id="nav-dropdown">
                                <NavDropdown.Item eventKey="4.1">Edit</NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.2">Report</NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.3">Option</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </div>
                        <div className='d-flex'>
                            <span><BsCalendarDate className='me-2'></BsCalendarDate>
                                Fri, 12 Oct, 2018</span>
                            <span className='ms-5'><GoLocation className='me-2'></GoLocation>
                                Ahmedabad, India</span>
                        </div>
                        <Button className='w-100 bg-white border border-secondary text-danger fw-semibold py-2 mt-3 mb-4'>Visit Website</Button>
                        <div className='d-flex align-items-center justify-content-between'>
                            <div className='d-flex align-items-center '>
                                <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" style={{ width: " 50px" }}
                                    alt="Avatar" />
                                <h6 className='fw-semibold ms-2'>Sarthak Kamra</h6>
                            </div>
                            <div className='d-flex align-items-center'>
                                <div>
                                    <BsEye></BsEye>
                                    <small className='me-5'>1.4k views</small>
                                </div>
                                <button className='px-3 py-2 bg-light border border-0 shadow-sm'><FiShare2></FiShare2></button>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Card>
                    <Card.Body>
                        <article>
                            <BsHandbagFill className='me-2'></BsHandbagFill>
                            Job
                        </article>
                        <div className='d-flex justify-content-between my-2'>
                            <Card.Title className='fw-bold fs-4'>Software Developer</Card.Title>
                            <NavDropdown title={<BsThreeDots />} id="nav-dropdown">
                                <NavDropdown.Item eventKey="4.1">Edit</NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.2">Report</NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.3">Option</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </div>
                        <div className='d-flex'>
                            <span><BsCalendarDate className='me-2'></BsCalendarDate>
                                Innovaccer Analytics Private Ltd.</span>
                            <span className='ms-5'><GoLocation className='me-2'></GoLocation>
                                Nodia, India</span>
                        </div>
                        <Button className='w-100 bg-white border border-secondary text-success fw-semibold py-2 mt-3 mb-4'>Apply on TimeJobs</Button>
                        <div className='d-flex align-items-center justify-content-between'>
                            <div className='d-flex align-items-center '>
                                <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" style={{ width: " 50px" }}
                                    alt="Avatar" />
                                <h6 className='fw-semibold ms-2'>Sarthak Kamra</h6>
                            </div>
                            <div className='d-flex align-items-center'>
                                <div>
                                    <BsEye></BsEye>
                                    <small className='me-5'>1.4k views</small>
                                </div>
                                <button className='px-3 py-2 bg-light border border-0 shadow-sm'><FiShare2></FiShare2></button>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default HomePostLeft;
