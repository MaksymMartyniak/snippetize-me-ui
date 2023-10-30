import axios from "axios";
import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import GoogleButton from 'react-google-button'

function App() {

const googleLogin = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: async (codeResponse) => {
            console.log(codeResponse);
            const tokens = await axios.post(
                'http://localhost:8000/dj-rest-auth/google/', {
                    code: codeResponse.code,
                });

            console.log(tokens);
        },
        onError: errorResponse => console.log(errorResponse),
    });
    return (
        <GoogleButton
          onClick={() => googleLogin()}
        />
    )
}
export default App;