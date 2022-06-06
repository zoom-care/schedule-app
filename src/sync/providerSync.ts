import axios from 'axios';

async function login() {
    return await axios.post(`/api/login`, {
        username: 'user',
        password: 'user'
    })
}

async function getAppointments(token: String) {
    return await axios.get(`/api/appointments`, {
        headers: {
            'Authorization': `Basic ${token}` 
        }
    })
}

async function getProvider(clinicId: Number, token: String) {
    return await axios.get(`/api/clinics/${clinicId}`, {
        headers: {
            'Authorization': `Basic ${token}` 
        }
    }).then(response => {
        return response.data
      })
}

const syncExports = {
    login,
    getAppointments,
    getProvider,
}

export default syncExports