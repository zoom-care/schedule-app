import React, { useState, useEffect } from 'react'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import { ProviderLogo } from './ProviderLogo'
import TimeSlot from '../components/TimeSlotButton'
import { convertStateNameToAbbrev, mergeNameAndCredentials, formatPhoneNumber } from '../utils'

import { IClinic, IProvider} from '../models'

interface AppointmentProps {
    clinic: IClinic;
    provider: IProvider;
    date: Date;
    timeSlots: []
}

export const AppointmentCard: React.FC<AppointmentProps> = ({
    date, 
    clinic, 
    provider, 
    timeSlots
}) => {
    const { name: clinicName, address, city, state, zipcode } = clinic
    const { name: providerName, credentials, phoneNumber } = provider
    const [visibleTimeSlots, setVisibleTimeSlots] = useState([])
    const [allButtonsVisible, setAllButtonVisible] = useState<Boolean>(false)

    useEffect(() => {
        if (timeSlots.length > 5 && !allButtonsVisible) {
            setVisibleTimeSlots(timeSlots.slice(0, 5))
            setAllButtonVisible(false)
        } else {
            setVisibleTimeSlots(timeSlots)
            setAllButtonVisible(true)
        }
    }, [timeSlots, allButtonsVisible])

    const handleTimeButtonClick = (e: React.MouseEvent<HTMLButtonElement> | undefined, time: string): void => {
        console.log('Schedule an appointment for ', time)
    }

    const handleMoreOrLessButtonClick = (e: React.MouseEvent<HTMLButtonElement> | undefined): void => {
        setAllButtonVisible(!allButtonsVisible)
    }

    return (
        <Paper id='appointment-card' square  elevation={10} sx={{ 
            borderBottomWidth:' 1px', 
            borderColor: 'rgb(219, 219, 219)', 
            borderLeftWidth: '1px', 
            borderRightWidth: '1px', 
            border: '0px solid black',
            m: '1px' }}>
            <Box id='appointment-card-clinic-info' sx={{ display: 'flex', flexFlow: 'column nowrap', alignItems: 'flex-start', p: '16px 24px' }}>
                <Typography sx={{ fontSize: '1.3rem', fontWeight: 800, letterSpacing: '0.05rem' }} color="text.primary">
                    {clinicName}
                </Typography>
                <Typography align='left' sx={{ fontSize: '1.05rem', lineHeight: '1.2rem', fontWeight: 400 }}>
                    {address}<br />
                    {city}, {convertStateNameToAbbrev(state)} {zipcode}
                </Typography>
            </Box>

            <Box id='appointmentcard-provider-info' sx={{ 
                display: 'flex', 
                flexFlow: 'row nowrap', 
                alignItems: 'flex-start', 
                p: '16px 24px'}}>
                <ProviderLogo />
                <Box sx={{ p: '0 0 0 15px', display: 'flex', flexFlow: 'column nowrap', alignItems: 'flex-start' }} width='100%' > 
                    <Typography sx={{ fontSize: '1.2rem', fontWeight: 600, lineHeight: '1.3rem', mt: '10px' }} color="#2ac1e8">
                        { mergeNameAndCredentials(providerName, credentials ?? '') }
                    </Typography>
                    <Typography sx={{ fontSize: '1rem', fontWeight: 400, lineHeight: '1.1rem' }}>
                        { phoneNumber ? formatPhoneNumber(phoneNumber) : '' }
                    </Typography>
                    <Box sx={{ display: 'flex', flexFlow: 'row wrap', alignItems: 'center', justifyContent: 'space-between', width: '100%', mt: '2px'}}>
                        { visibleTimeSlots.map(time => (
                                <TimeSlot 
                                    key={time}
                                    time={time} 
                                    btnVariant='contained' 
                                    style={{bgColor: 'rgb(46, 66, 74)' }} 
                                    handleClick={(e) => handleTimeButtonClick(e, time)} />
                                )
                        )}
                        { timeSlots.length > 5 && 
                            <TimeSlot 
                                time={allButtonsVisible ? 'Less' : 'More'} 
                                btnVariant='outlined' 
                                style={{ bgColor: 'rgb(46, 66, 74)', color: 'rgb(46, 66, 74)' }}
                                handleClick={(e) => handleMoreOrLessButtonClick(e)} />
 
                        }
                    </Box>
                </Box>
            </Box>            
        </Paper>
    )
}
