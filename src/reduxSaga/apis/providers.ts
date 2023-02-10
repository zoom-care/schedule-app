import axios from "axios";

async function login() {
  return await axios.post(`/api/login`, {
    username: "user",
    password: "user",
  });
}

async function getAppointments(token: String) {
  return await axios
    .get(`/api/appointments`, {
      headers: {
        Authorization: `Basic ${token}`,
      },
    })
    .then((response) => {
      return response.data.appointmentSlots;
    });
}

async function getProvider(clinicId: Number, token: String) {
  return await axios
    .get(`/api/clinics/${clinicId}`, {
      headers: {
        Authorization: `Basic ${token}`,
      },
    })
    .then((response) => {
      return response.data;
    });
}

async function getProviders(token: String) {
  return await axios
    .get(`/api/clinics/`, {
      headers: {
        Authorization: `Basic ${token}`,
      },
    })
    .then((response) => {
      return response.data.clinics;
    });
}

const providerSyncs = {
  login,
  getAppointments,
  getProvider,
  getProviders,
};

export default providerSyncs;
