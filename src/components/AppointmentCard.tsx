import React from 'react'
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import { ProviderLogo } from './ProviderLogo'
import { mergeNameAndCredentials, formatPhoneNumber } from '../utils'

import { IClinic, IProvider} from '../models'

interface AppointmentProps {
    clinic: IClinic;
    provider: IProvider;
    date: Date;
    timeSlots: []
}

export const AppointmentCard: React.FC<AppointmentProps> = ({clinic, provider}) => {
    const { name: clinicName, address, city, state, zipcode } = clinic
    const { name: providerName, credentials, phoneNumber } = provider

    return (
        <Paper id='appointment-card' sx={{ margin: '1px', p: '16px 24px' }}>
            <Box id='appointment-card-clinic-info' sx={{ display: 'flex', flexFlow: 'column nowrap', alignItems: 'flex-start' }}>
                <Typography sx={{ fontSize: '1.2rem', fontWeight: 800 }} color="text.primary">
                    {clinicName}
                </Typography>
                <Typography align='left' sx={{ lineHeight: '1.2rem' }}>
                    {address}<br />
                    {city}, {state} {zipcode}
                </Typography>
            </Box>

            <Box id='appointmentcard-provider-info' sx={{ display: 'flex', flexFlow: 'row nowrap', alignItems: 'flex-start', pt: '20px' }}>
                <ProviderLogo />
                <Box sx={{ p: '0 0 0 15px', display: 'flex', flexFlow: 'column nowrap', alignItems: 'flex-start', mt: '10px' }} width='100%' > 
                    <Typography sx={{ fontSize: '1.2rem', fontWeight: 800, lineHeight: '1.3rem' }} color="#2ac1e8">
                        { mergeNameAndCredentials(providerName, credentials ?? '') }
                    </Typography>
                    <Typography>
                        { phoneNumber ? formatPhoneNumber(phoneNumber) : '' }
                    </Typography>
                    <Box sx={{ pt: '5px' }}>
                        <Button variant="contained" size="small" sx={{ backgroundColor: '#2596be' }}>Learn More</Button>
                    </Box>
                </Box>
            </Box>            
        </Paper>
    )
}

