import Box from '@mui/material/Box'

export const ProviderLogo = () => (
    <Box 
        component='img' 
        src={`${process.env.PUBLIC_URL}/provider.png`} 
        alt='Provider logo' 
        height='105px'
        width='105px'
        borderRadius='50%'
    />
)