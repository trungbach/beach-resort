import axios from 'axios';

export const callApi = () => {
    return axios.get('https://5fee29939708250017ce41af.mockapi.io/api/single-room')
        .catch(error => console.log('Error:',error));
}