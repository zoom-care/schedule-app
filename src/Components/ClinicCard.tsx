import React from 'react'
import {datetimeConverter, phoneFormatter} from '../lib/formatters';
import {AppointmentSlot, Clinic, Provider, Slot} from '../zoomcare-api'

interface Props{
    slot: Slot
}
const ClinicCard:React.FC<Props> = ({slot}) => {

    const {
        clinic:{address, city, name, state, zipcode},
        appointmentSlots, 
        provider:{name:providerName, credentials, phoneNumber}
    }:{
        clinic:Clinic,
        appointmentSlots:AppointmentSlot[],
        provider:Provider
    } = slot

    const slotArr = appointmentSlots.map((slot:AppointmentSlot, index:number) => (
        <button 
            className='w-2/12 bg-slate-800 text-white rounded-md h-[30px]' 
            key={index}
            onClick={() => console.log(`${datetimeConverter(slot.startTime)} was picked as time`)}
            >
            {datetimeConverter(slot.startTime)}
        </button>
    ))
    return (
        <div className="w-10/12 border-2">
            <div className='ml-2'>
                <div>
                    <p className='font-bold'>{name}</p>
                    <p >{`${address}`}</p>
                    <p>{`${city} ${state} ${zipcode}`}</p>
                </div>
                <div className='flex flex-row '>
                    <div className='h-[100px] w-[100px] relative rounded-full overflow-hidden'>
                        <img  src="provider.png" alt="stethescope"/>
                    </div>
                    <div className='flex flex-col w-[75%] ml-2'>
                        <p className='font-bold text-blue-500'>{`${providerName}, ${credentials}`}</p>
                        <p>{phoneFormatter(phoneNumber)}</p>
                        <div>
                            {slotArr}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClinicCard

/*

const dateString = "2020-02-08 21:00-07:00";

// Create a Date object from the string
const date = new Date(dateString);

// Get the hours and minutes in the local time zone
const hours = date.getHours();
const minutes = date.getMinutes();

// Convert the hours to 12-hour format and determine if it's am or pm
const ampm = hours >= 12 ? 'pm' : 'am';
const formattedHours = hours % 12 || 12;

// Format the time into the "4:45 pm" format
const formattedTime = `${formattedHours}:${minutes.toString().padStart(2, '0')} ${ampm}`;

console.log(formattedTime); // Output: "2:00 pm"

clinicId
durationInMinutes
id
provider
id
language
name
phoneNumber
[[Prototype]]
startTime
*/