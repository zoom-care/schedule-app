import axios from "axios";
import { FC, useState, useEffect } from "react";
import Card from "../components/Card";
import { IAppointment } from '../interfaces/appointment.interface';
import { IClinic } from "../interfaces/clinic.interface";


const Schedule: FC = () => {
    
    const [clinics, setClinics] = useState<any[]>([]);
    const [appointments, setAppointments] = useState<any[]>([]);

    const login = async () => {
        sessionStorage.removeItem('authToken');
        try {   
            await fetch('/api/login', {
            method: "POST",
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: "Daniel",
                    password: 'strong-password',
                }),
            }); 
            
        } catch (error) {
            console.log(error)   
        }
    };
        
    const getAppointments = async () => {
        axios
        .get('/api/appointments', {
            method: "GET",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
                'Authorization': getToken()
            },
        })
        .then(response => setAppointments(response.data?.appointmentSlots));
    }
    const getClinics = async () => {
        axios
        .get('/api/clinics', {
            method: "GET",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
                'Authorization': getToken()
            },
        })
        .then(response => setClinics(response.data?.clinics));
    }
    
    const getToken = (): string => {
        let token = sessionStorage.getItem('authToken') || '';
        return token;
    } 

    const getAllData = async () => {
        await login();
        await getAppointments();
        await getClinics();
        
    }
    
    useEffect(() => {
        getAllData();
    }, []);

    return ( 
    <div style={{ padding: 12 }}>
        {appointments && clinics && appointments.map((appointment: IAppointment) => {
            return clinics.map((clinic: IClinic) => {
                if (clinic.id === appointment.clinicId) {               
                    return <Card 
                        key={clinic.id}
                        clinic={clinic}
                        appointments={appointment}
                    />
                }
            })
        })}
    </div>
    )
};

export default Schedule;