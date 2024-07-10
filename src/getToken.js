import { useState, useEffect } from "react";
import Apicalls from "./Apicalls"; // Adjust import path as needed

const useJwtToken = () => {
    const [jwtToken, setJwtToken] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchJwtToken = async () => {
            try {
                const response = await Apicalls.get('tokens/generateJwttoken');
                setJwtToken(response.data);
                localStorage.setItem('jwtToken', response.data);
            } catch (error) {
                console.error('Error fetching JWT token:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchJwtToken();
    }, []);

    return { jwtToken, isLoading };
};

export default useJwtToken;
