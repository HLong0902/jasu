import axios from 'axios';


export default axios.create({
    baseURL: 'http://94db-27-72-144-189.ngrok.io',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
})