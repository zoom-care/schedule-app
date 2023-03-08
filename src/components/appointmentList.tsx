import React, { useState, useEffect } from "react";
import axios from 'axios';
import './Appointment.css';


interface AuthResponse {
    authToken: string
}
const AppointmentList = (props: AuthResponse) => {
    const {authToken} = props;
    const [appointList, setAppointmentList] = useState<any>([]);
    const [loadAppointment, setLoadAppointment] = useState<boolean>(true);
    const [data, setData] = useState<any>([]);
    useEffect(() => {
        getAppointmentList();
    }, []);
    useEffect(() => {
        if(!loadAppointment) {
            getClinicList();
        }
    }, [loadAppointment])
    const getAppointmentList = async() => {
        try {
            const {data} = await axios.get('/api/appointments', {
                headers: {
                    Authorization: authToken
                }
            });
            setAppointmentList(data.appointmentSlots);
            setLoadAppointment(false)
        } catch(error: any) {
            console.log(" error in response ==> ", error);
        }
    }
    const getClinicList = async() => {
        try {
            const {data} = await axios.get('/api/clinics', {
                headers: {
                    Authorization: authToken
                }
            });
            let clinicList = data.clinics;
            let finalDisplayData: any = [];
            appointList.map((singleAppointment: any) => {
                let dateInMinuteListArr = dateMinuteArr(singleAppointment.startTime, singleAppointment.durationInMinutes);
                singleAppointment.bookingSlots = dateInMinuteListArr;
                if(finalDisplayData.find((x: any) => x.id === singleAppointment.clinicId)) {
                    finalDisplayData[finalDisplayData.findIndex((x: any) => x.id === singleAppointment.clinicId)].appointmentList.push(singleAppointment);
                } else {
                    if(clinicList.find((x: any) => x.id === singleAppointment.clinicId)) {
                        let clinicObj = clinicList.find((x: any) => x.id === singleAppointment.clinicId);
                        clinicObj.appointmentList = [singleAppointment];
                        finalDisplayData.push(clinicObj);
                    }
                    
                }
            });
            setData(finalDisplayData);
        } catch(error: any) {
            console.log(" error in response ==> ", error);
        }
    }
    const dateMinuteArr = (dateResponse: string, durationInMinutes: number) => {
        let splitData = dateResponse.split(' ');
        let splitTime = splitData[1].split('-');
        let startSetHrs = splitTime[0].split(':');
        let endSetHrs = splitTime[1].split(':');

        let returnDataArray = [];
        if(splitTime[0] < splitTime[1]) {
            const start = new Date(`${splitData[0]} ${splitTime[0]}`);
            start.setHours(Number(startSetHrs[0]), Number(startSetHrs[1]), 0); //8 AM
            const end = new Date(`${splitData[0]} ${splitTime[1]}`);
            end.setHours(Number(endSetHrs[0]), Number(endSetHrs[1]), 0); //5 PM

            while (start <= end) {
                returnDataArray.push({
                    isActive: false,
                    time: start.toLocaleString('en-US', {hour: '2-digit', minute: '2-digit'})
                });
                start.setMinutes(start.getMinutes() + durationInMinutes);
            }
        } else {
            let anotherDay = addOneDay(new Date(`${splitData[0]} ${splitTime[1]}`));
            
            const start = new Date(`${splitData[0]} ${splitTime[0]}`);
            start.setHours(Number(startSetHrs[0]), Number(startSetHrs[1]), 0); 
            const end = new Date(`${anotherDay} ${splitTime[1]}`);
            end.setHours(Number(endSetHrs[0]), Number(endSetHrs[1]), 0); 

            let endTime = end.toLocaleString('en-US', {hour: '2-digit', minute: '2-digit'})

            while (start <= end) {
                returnDataArray.push({
                    isActive: false,
                    time: start.toLocaleString('en-US', {hour: '2-digit', minute: '2-digit'})
                });
                start.setMinutes(start.getMinutes() + durationInMinutes);
            }
        }
        returnDataArray = returnDataArray.slice(0, -1);
        return returnDataArray;
    }
    const addOneDay = (date: any) => {
        date.setDate(date.getDate() + 1);
        let returnDate = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
        return returnDate;
    }
    const formatPhoneNumber = (phoneNumberString: string) => {
        var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
        var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
        if (match) {
          var intlCode = (match[1] ? '+1 ' : '');
          return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
        }
        return null;
    }
    const handleClick = (innerIndex: number, outerIndex: number, mainIndex: number) => {
        const getData: any = [...data];
        const dataOne = {...getData[mainIndex]};
        const subData = {...dataOne.appointmentList[outerIndex]};
        subData.bookingSlots[innerIndex].isActive = !subData.bookingSlots[innerIndex].isActive;
        setData(getData);
    }
    console.log('data ==> ', data);
    return (
        <div className="main-div">
            {/* <p>Hi! This is appointment list</p> */}
            {
                data.map((singleData: any, singleIndex: number) => (
                    <div key={singleIndex} className="child-div">
                        <div>
                            <h3>{singleData.name}</h3>
                            
                            <span>{singleData.address}</span><br/>
                            <span>{`${singleData.city}, ${singleData.state} ${singleData.zipcode}`}</span>
                            {
                                singleData.appointmentList.map((singleAppointment: any, singleAppointmentIndex: number) => (
                                    <div className="provider" key={singleAppointmentIndex}>
                                        <div>
                                            <img src="/provider.png" width={100} height={100}/>
                                        </div>
                                        <div className="provider-right-sec">
                                            <span className="provider-title">{`${singleAppointment.provider.name}, ${singleAppointment.provider.credentials}`}</span><br />
                                            <span className="provider-contact">{formatPhoneNumber(singleAppointment.provider.phoneNumber)}</span>
                                            <div className="provider-booking-div">
                                                {
                                                    singleAppointment.bookingSlots.map((singleSlot: any, index: number) => (
                                                        <button className={`${singleSlot.isActive && 'active'}`} onClick={() => handleClick(index, singleAppointmentIndex, singleIndex)}>{singleSlot.time}</button>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            
                        </div>
                    </div>
               )) 
            }
        </div>
    )
}
export default AppointmentList;