import React from 'react';

const Registrar = () => {

    const handleRegistrar = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log('Email: ', email, 'Password: ', password);
    }

    const handleBlurEmail = event => {
        console.log(event.target.value);
    }
    const handleBlurPassword = event => {
        console.log(event.target.value);
    }

    return (
        <div>
            <form onSubmit={handleRegistrar}>
                <input onBlur={handleBlurEmail} type="email" name="email" id="" placeholder='Enter Your Email' />
                <br />
                <input onBlur={handleBlurPassword} type="password" name="password" id="" placeholder='Enter Your Password' />
                <br />
                <button type="submit">Registrar</button>
            </form>
        </div>
    );
};

export default Registrar;