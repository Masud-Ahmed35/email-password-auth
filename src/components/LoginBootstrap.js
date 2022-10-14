import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../firebase/firebase.init';

const auth = getAuth(app);

const LoginBootstrap = () => {
    const [success, setSuccess] = useState(false);
    const [userEmail, setUserEmail] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        setSuccess(false);

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setSuccess(true);
                console.log(user);
            })
            .catch(error => {
                console.error('Error: ', error);
            })
    }

    const handleBlurEmail = event => {
        const email = event.target.value;
        setUserEmail(email);
    }

    const handleForgetPassword = () => {
        if (!userEmail) {
            alert('Please Enter Your Email Address for Reset Password.')
            return;
        }

        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                alert('Password reset email sent!');
            })
            .catch((error) => {
                console.error('Error: ', error);
            })
    }

    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-success text-center'>Please Login!!!</h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Example label</label>
                    <input onBlur={handleBlurEmail} type="email" name='email' className="form-control" id="formGroupExampleInput" placeholder="Enter Your Email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Another label</label>
                    <input type="password" name='password' className="form-control" id="formGroupExampleInput2" placeholder="Enter Your Password" required />
                </div>
                <button className="btn btn-primary" type="submit">Login</button>
                <p>Forget Password? <button onClick={handleForgetPassword} type="button" className="btn btn-link">Reset Password</button></p>
                <div className='fs-5 text-success'>
                    {
                        success && 'You are Successfully Login to This Account.'
                    }
                </div>
            </form>
            {
                success || <p><small>If Already have an account, Please <Link to='/registrar'>Registrar</Link></small></p>
            }
        </div>
    );
};

export default LoginBootstrap;