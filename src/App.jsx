import React from 'react';
import ReactDOM from 'react-dom';
import { supabase } from './supabase';
import { useState, useEffect } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import services from './components/pages/Services';
import products from './components/pages/Products';
import signup from './components/pages/Signup';


function App() {
    const [session, setSession] = useState(null);

    useEffect(() => {
        // What is the initial user session? Set that session to the "session" state variable
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });

        // Has the user's authentication state changed? If so, set the session state variable to it
        const {
            data: { subscription }
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        })

        // No longer listen to the subscription state within this useEffect
        return () => subscription.unsubscribe();
    }, []);

    const logOut = () => {
        supabase.auth.signOut();
    }

    if (!session) {
        return (
            <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} providers={['google']} />
        );
    } else {
        return (
            <div>
                <Router>
                <Navbar />
                <Routes>
                    <Route path='/' Component={Home} />
                    <Route path='/services' Component={services} />
                    <Route path='/products' Component={products} />
                    <Route path='/sign-up' Component={signup} />
                </Routes>
                </Router> 
            </div>
        );
    }
}

export default App;
// ReactDOM.render(<App />, document.getElementById('root'));