import React, { createContext, useState, useEffect } from 'react';
import Apicalls, { post_url } from '../../Apicalls';

export const JwtContext = createContext();

const JwtProvider = ({ children }) => {
    const [jwtToken, setJwtToken] = useState(null);

    useEffect(() => {
        const generateJwtToken = async () => {
            try {
                const responsetoken = await Apicalls.get('tokens/generateJwttoken');
                setJwtToken(responsetoken.data);
            } catch (error) {
                console.error('Error fetching JWT token:', error);
            }
        };

        generateJwtToken();
    }, []);

    return (
        <JwtContext.Provider value={jwtToken}>
            {children}
        </JwtContext.Provider>
    );
};

export default JwtProvider;