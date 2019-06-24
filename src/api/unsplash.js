import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: { 
        Authorization: 'Client-ID 3e3a8fb865aca12023a90090d6ae1bf74e1f7bf2b01ba10699671dad790d3392'
    }    
});