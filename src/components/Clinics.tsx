import { useEffect } from 'react';
import { axiosGet, getCredentials } from '../utils';

function Clinics() {
  
  useEffect(() => {
      getCredentials().then(async (r: any) => {
        const getResponse = await axiosGet('/api/clinics/')
        console.log("All clinic data:")
        console.log(getResponse.clinics)
      })
    }, []);
 

  const getClinic2 = () => {
    getCredentials().then(async (r: any) => {
      const getResponse = await axiosGet('/api/clinics/2')
      console.log("Clinic 2 data:")
      console.log(getResponse)
    })
  }

  return (
      <>
        <h1>API call for a single clinic by ID</h1>
        
        <button onClick={getClinic2}>Retrieve clinic #2 data</button>

        <p>(see console)</p>
      </>

    );
  }
  
export default Clinics;
