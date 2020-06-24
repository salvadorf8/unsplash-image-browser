import axios from 'axios';

//nice thing about axios, you can setup pre-configured instance of the axios client that has default properties set for where it makes a request too, or headers, even params

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ac0858529cf3a254fc4186dca45b8d2fed1a9d03ac9636fea93f693ff5237ab6'
    }
});