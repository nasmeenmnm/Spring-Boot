import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validated, setValidated] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            axios.post('http://localhost:9000/auth/login', {
                email: email,
                password: password
            })
            .then(function (response) {
                if (response.data === 'Success') {
                    navigate('/home'); // Redirect to the next page
                } else {
                    setError(response.data);
                }
            })
            .catch(function (error) {
                console.log(error);
                setError('An error occurred. Please try again.');
            });
        }

        setValidated(true);
    };

    return (
        <div className='register-container'>
            <Form noValidate validated={validated} onSubmit={handleSubmit} className='register-form'>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid email.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a password.
                    </Form.Control.Feedback>
                </Form.Group>

                {error && <p className="text-danger">{error}</p>}

                <div className="button-container">
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <Button variant="link" onClick={() => navigate('/register')}>
                        Don't you have an account? Register
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default Login;
