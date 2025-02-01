import React, { useEffect, useState } from 'react';
import apiService from '../services/apiService';



function HelloComponent() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchMessage = async () => {
            try {
                const data = await apiService.getHelloMessage();
                setMessage(data.message);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };
        fetchMessage();
    }, []);


    return (

        <div>
            <h1>{message}</h1>
        </div>
    )
}

export default HelloComponent;