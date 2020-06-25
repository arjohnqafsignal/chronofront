import axios from 'axios';


const getClientIp = () => {
    const response = axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.REACT_APP_GEO_API_KEY}`)
    .then((response) => {

        console.log(response);
        return response;
    })
    .catch((error) =>{
        console.log(error);
    });
    return response;
}

export { getClientIp }