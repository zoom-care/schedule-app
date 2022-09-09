import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Provider from './Provider';

const Clinics = () => {

const token = sessionStorage.getItem('authToken')
const [clinics, setClinics] = useState([]);
const [providers, setProviders] = useState([]);


    const getClinics = () => {
        axios
            .get(`/api/clinics`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization' : token
                },
            })
            .then(response => { setClinics(response.data?.clinics) })
    };

    const getProviders = () => {
        axios
            .get(`api/appointments`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization' : token
                },
            })
            .then(response => { console.log('providers: ', response.data?.appointmentSlots); setProviders(response.data?.appointmentSlots) })
    }

    useEffect(()=>{
        getClinics();
        getProviders();
    },[])

    return(
        <div className='felx justify-start m-4'>
            {
                clinics.map((item, index) => {
                    // console.log('map: ', item, index, providers)
                    return(
                        <div key={index} className="p-4 justify-start border-l-2 border-r-2 border-b-2">
                            <div className='pb-6'>
                                <div className='flex justify-start'>
                                    <label><b>{item?.name}</b></label>
                                </div>
                                <div className='flex justify-start'>
                                    <label>{item.address}</label> 
                                </div>
                                <div className='flex justify-start'>
                                    <label className='pr-1'>{item?.city},</label>   
                                    <label className='pr-1'>{item?.state}</label>
                                    <label className='pr-1'>{item?.zipcode}</label>
                                </div>
                            </div>
                            <Provider idClinic={item?.id} providers={providers}></Provider>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Clinics