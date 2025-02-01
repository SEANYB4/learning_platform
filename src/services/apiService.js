import axios from 'axios';


const API_URL = 'http://localhost:3001/api/';



const getHelloMessage = async () => {

    try {
        const response = await axios.get(`${API_URL}hello`);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch data:', error);
        throw error;
    }
};


export default {
    getHelloMessage,
};