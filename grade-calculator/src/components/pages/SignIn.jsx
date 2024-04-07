import React, { useState } from 'react';
import { supabase } from '../../supabase';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async (e) => {
        e.preventDefault();
        const { user, error } = await supabase.auth.signIn({
            email,
            password
        });
        if (error) {
            alert(error.message);
        } else {
            alert('Sign in successful');
        }
    }

    return (
        <div>
            <h1>Sign In</h1>
            <form onSubmit = {handleSignIn}>
                <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email'
                    required
                />
                <input
                    type='password'
                    value={email}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password'
                    required
                />
                <button type='submit'>Sign In</button>
            </form>
        </div>
    );
}

export default SignIn;