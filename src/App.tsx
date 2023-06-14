import './App.css';
import { ListOfClinics } from './components';
import { useListOfProviders, useLogin } from './hooks';

let userLogin = {
  username: 'Jhorman',
  password: 'Orozco',
};

function App() {
  let { authToken } = useLogin({ userLogin });
  let { clinics, appointmentsByClinic } = useListOfProviders(authToken);

  return (
    <div className="App">
        {clinics?.map((clinic, i) => (
          <ListOfClinics
            key={i}
            clinic={clinic}
            appointments={appointmentsByClinic(clinic.id)}    
          />
        ))}
    </div>
  );
}

export default App;
