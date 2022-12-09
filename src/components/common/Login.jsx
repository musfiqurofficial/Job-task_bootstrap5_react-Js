import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import RegisterLottie from '../common/lottie/RegisterLottie';

const Login = ({ show, handleClose }) => {
    return (
        <div>
            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='fs-6 text-center'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</Modal.Title>
                </Modal.Header>
                <Modal.Body className='m-3'>
                    <div className='row'>
                        <Form className='col-6'>
                            <h1 className='mb-4 fw-bold'>Sing In</h1>
                            <Form.Group className="" controlId="exampleForm.ControlInput1">
                                <Form.Control
                                    className='rounded-0 bg-light'
                                    type="email"
                                    placeholder="Email"
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group className="" controlId="exampleForm.ControlInput1">
                                <Form.Control
                                    className='rounded-0 bg-light'
                                    type="password"
                                    placeholder="Password"
                                    autoFocus
                                />
                            </Form.Group>
                            <div>
                                <button type="submit" className='btn btn-primary w-100 rounded-pill mt-4 py-2'>Sing In</button>
                                <button className="shadow-sm group h-12 px-6 border-2 border-gray-300 rounded-lg transition duration-300 hover:border-secondary focus:bg-blue-50 active:bg-blue-100">
                                    <div className="position-relative d-flex align-items-center space-x-4 justify-content-center">
                                        <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className="position-absolute left-0" alt="google logo" />
                                        <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-secondary sm:text-base">Continue with Google</span>
                                    </div>
                                </button>
                                <button className="shadow-sm group h-12 px-6 border-2 border-gray-300 rounded-lg transition duration-300 
                                     hover:border-secondary focus:bg-blue-50 active:bg-blue-100">
                                    <div className="position-relative d-flex align-items-center space-x-4 justify-content-center">
                                        <img src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg" className="position-absolute left-0" alt="Facebook logo" />
                                        <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-secondary sm:text-base">Continue with Facebook</span>
                                    </div>
                                </button>
                            </div>
                        </Form>
                        <div className='col p-3'>
                            <small>Don't have an account yet? <Link>Create new for free!</Link></small>
                            <RegisterLottie />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Login;
