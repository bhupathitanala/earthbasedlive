import React, { useContext } from 'react';
import { GoogleLogin, GoogleLogout } from '@react-oauth/google';
import { GoogleOAuthContext } from '@react-oauth/google';

const GoogleButton = () => {
  const { signIn, signOut, isAuthenticated } = useContext(GoogleOAuthContext);

  const onSuccess = (response) => {
    console.log('Login success:', response);
  };

  const onFailure = (error) => {
    console.log('Login failed:', error);
  };

  return (
    <>
      {isAuthenticated ? (
        <GoogleLogout
          buttonText="Logout"
          onLogoutSuccess={() => signOut()}
        />
      ) : (
        <GoogleLogin
          clientId="939155611260-6uoka8hf6kagk192dhsk4pq4l7o0k13t.apps.googleusercontent.com" // Should ideally come from context if provided through GoogleOAuthProvider
          buttonText="Login with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          redirectUri="https://earthbased.store" // Replace with your production URL
        />
      )}
    </>
  );
};

export default GoogleButton;
