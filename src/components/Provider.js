import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Provider = ({ idClinic, providers }) => {
    console.log('providers OBJ:', providers)

    const formatDate = (date) => {
        const dateFormated = new Date(date).toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        });
        return dateFormated;
    }

    return (
        <>
            {
                providers.map((item, index) => {
                    const { provider } = item; 
                    if(idClinic === item.clinicId) {
                        return(
                            <div key={index} className='flex w-full p-2'>
                                <div className='inline-grid grid-cols-2 justify-start content-start'>
                                    <span className={"items-center self-center justify-center"}>
                                        <img  alt='img' className='rounded-full max-h-[100px]' src='provider.png'/>
                                    </span>
                                    
                                    <div>
                                        <div className='flex justify-start'>
                                            <label className='text-blue-400'><b>{provider?.name},</b></label>
                                            <label className='text-blue-400 pl-1'><b>{provider?.credentials}</b></label>
                                        </div>
                                        <div className='flex justify-start'>
                                            <label>{provider?.phoneNumber}</label> 
                                        </div>
                                        <div className='flex justify-start'>
                                            <button class="bg-gray-700 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded">
                                            { formatDate(item.startTime) }
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) 
                    } 
                    return null
                })
            }
        </>
    )
}

export default Provider