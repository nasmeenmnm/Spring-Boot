import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Register.css';
import axios from 'axios';

const Register = () => {
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            axios.post('http://localhost:9000/auth/register', {
                email: email,
                name: name,
                contactNo: contactNo,
                password: password
            })
            .then(function (response) {
                console.log(response);
                navigate('/login'); 
            })
            .catch(function (error) {
                console.log(error);
            });
        }

        setValidated(true);
    };

    return (
        <div className="register-container">
            <Form noValidate validated={validated} onSubmit={handleSubmit} className="register-form">
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="validationCustom02">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="validationCustom01">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="validationCustom03">
                        <Form.Label>Contact No</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Contact No"
                            value={contactNo}
                            onChange={(e) => setContactNo(e.target.value)}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="validationCustom04">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <div className="button-container">
                    <Button type="submit" className="mb-3">Register</Button>
                    <Button variant="link" onClick={() => navigate('/login')}>
                        Already have an account? Login
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default Register;
