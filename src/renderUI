// Helper function to make API calls
const apiCall = async (path, token) => {
  const response = await fetch(path, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return response.json();
}

// Log in and get the token
const login = async () => {
  const response = await apiCall('/api/login');
  return response.token;
}

// Get the list of appointments
const getAppointments = async (token) => {
  const response = await apiCall('/api/appointments', token);
  return response.appointments;
}

// Get a specific clinic by ID
const getClinic = async (clinicId, token) => {
  const response = await apiCall(`/api/clinics/${clinicId}`, token);
  return response.clinic;
}

// Main function to render the UI
const renderUI = async () => {
  // Get the token
  const token = await login();

  // Get the list of appointments
  const appointments = await getAppointments(token);

  // Group the appointments by provider/clinic
  const providers = {};
  appointments.forEach(appointment => {
    if (!providers[appointment.providerId]) {
      providers[appointment.providerId] = {
        provider: appointment.provider,
        clinicId: appointment.clinicId,
        slots: []
      };
    }
    providers[appointment.providerId].slots.push(appointment);
  });

  // Get the clinic information for each provider
  for (const providerId in providers) {
    const provider = providers[providerId];
    const clinic = await getClinic(provider.clinicId, token);

    // Create a new element for the provider
    const providerElement = document.createElement('div');
    providerElement.classList.add('provider');

    // Add the clinic info to the provider element
    const clinicInfoElement = document.createElement('div');
    clinicInfoElement.classList.add('clinic-info');
    const clinicNameElement = document.createElement('div');
    clinicNameElement.classList.add('clinic-name');
    clinicNameElement.textContent = clinic.name;
    clinicInfoElement.appendChild(clinicNameElement);
    const clinicAddressElement = document.createElement('div');
    clinicAddressElement.classList.add('clinic-address');
    clinicAddressElement.textContent = clinic.address;
    clinicInfoElement.appendChild(clinicAddressElement);
    providerElement.appendChild(clinicInfoElement);

    // Add the provider info to the provider element
    const providerInfoElement = document.createElement('div');
    providerInfoElement.classList.add('provider-info');
    const providerNameElement = document.createElement('div');
    providerNameElement.classList.add('provider-name');
    providerNameElement.textContent = provider.provider.name;
    providerInfoElement.appendChild(providerNameElement);
    const providerCredentialsElement = document.createElement('div');
    providerCredentialsElement.classList.add('provider-credentials');
    providerCredentialsElement.textContent = provider.provider.credentials;
    providerInfoElement.appendChild(providerCredentialsElement);
    const providerPhoneElement = document.createElement('div');
    providerPhoneElement.classList.add('provider-phone');
    providerPhoneElement.textContent = provider.provider.phone;
    providerInfoElement.appendChild(providerPhoneElement);
    providerElement.appendChild(providerInfoElement);

    // Add the appointment slots to the provider element
    const appointmentSlotsElement = document.createElement('div');
    appointmentSlotsElement.classList.add('appointment-slots');
    provider.slots.forEach(slot => {
      const appointmentSlotElement = document.createElement('button');
      appointmentSlotElement.classList.add('appointment-slot');
      appointmentSlotElement.textContent = slot.startTime;
      appointmentSlotsElement.appendChild(appointmentSlotElement);
    });
    providerElement.appendChild(appointmentSlotsElement);

    // Add the provider element to the list of providers in the UI
    const providersElement = document.getElementById('providers');
    providersElement.appendChild(providerElement);
}
}
  window.addEventListener('load', () => {
    renderUI();
  });
