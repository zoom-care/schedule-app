import axios from 'axios';

export const getCredentials = async () => {
    const body = { username: 'Fred', password: 'muffin1' }
    try {
        const res = await axios.post('/api/login', body)
    } catch (e) {
        console.log(e)
    }
}

export const axiosGet = async (url: string) => {
    const config = {
        headers: {
          'Authorization': sessionStorage.getItem('authToken'),
          'Content-Type': 'application/json'
        }
    };
    const d = await axios.get(url, config)
        .then(r => r.data)
        .catch(err => console.log(err))
    return d
}
