import React from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import RegisterLottie from '../common/lottie/RegisterLottie';
import google from "../../assets/google.png";
import fb from "../../assets/fb.png";

const Register = ({ registerShow, handleRegisterClose }) => {
    return (
        <div >
            <Modal size="lg" registerShow={registerShow} onHide={handleRegisterClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='fs-6 text-center'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</Modal.Title>
                </Modal.Header>
                <Modal.Body className='m-3'>
                    <div className='row'>
                        <Form className='col-6'>
                            <h1 className='mb-5 fw-bold'>Create Account</h1>
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
                                <button type="submit" className='btn btn-primary w-100 rounded-pill my-4 py-2'>Sing In</button>
                                <button className='btn btn-light border w-100 rounded-0 py-2 mb-2'><img className='login-icon' src={fb} alt="" />  Sign in with Facebook</button>
                                <button className='btn btn-light border w-100 rounded-0 py-2 '><img className='login-icon' src={google} alt="" /> Sign in with Google</button>
                            </div>
                        </Form>
                        <div className='col p-3'>
                            <small>Don't have an account yet? <Link>Create new for free!</Link></small>
                            <div className='p-3'>
                                <RegisterLottie />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div >
    );
};

export default Register;


