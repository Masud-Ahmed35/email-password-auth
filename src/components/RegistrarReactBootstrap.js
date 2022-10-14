import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import app from '../firebase/firebase.init';

const auth = getAuth(app);

const RegistrarReactBootstrap = () => {
    const [passwordError, setPasswordError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleRegistrar = event => {
        event.preventDefault();
        setSuccess(false);

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value

        console.log(email, password);

        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setPasswordError('You have to provide at least two capital latter.');
            return;
        }
        if (!/(?=.*[!@#$&*])/.test(password)) {
            setPasswordError('You have to provide at least one special character.');
            return;
        }
        if (!/(?=.*[0-9])/.test(password)) {
            setPasswordError('You have to provide at least one digit.');
            return;
        }
        if (!/.{8}/.test(password)) {
            setPasswordError('You have to provide at least 8 character.');
            return;
        }
        setPasswordError('');

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess(true);
                form.reset();
            })
            .catch(error => {
                console.error('Error: ', error);
                setPasswordError(error.message);

            })
    }


    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-primary text-center'>Please Registrar!!!</h3>
            <Form onSubmit={handleRegistrar}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <p className='text-danger'>{passwordError}</p>
                {
                    success && <p className='text-success'>User Created Successfully.</p>
                }
                <Button variant="primary" type="submit">
                    Registrar
                </Button>
            </Form>
        </div>
    );
};

export default RegistrarReactBootstrap;