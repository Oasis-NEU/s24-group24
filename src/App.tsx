import { supabase } from './supabase';
import { useState, useEffect } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

function App() {
    const [session, setSession] = useState<any>();

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
                <h1>Logged In</h1>
                <button onClick={() => logOut()}>Log Out</button>
            </div>
        );
    }
}

export default App;