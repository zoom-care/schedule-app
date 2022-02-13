import React from 'react'
import Button from '@mui/material/Button'

// enum buttonVariant {
//     text = "text",
//     contained = "contained" ,
//     outlined = 'outlined',
//     undefined = 'undefined'
// }

interface TimeSlotButtonProps {
    time: string;
    btnVariant?: "text" | "outlined" | "contained" | undefined;
    style?: object;
    handleClick:(e: React.MouseEvent<HTMLButtonElement> | undefined, time?: string) => void;
}

// '"text" | "contained" | "outlined" | undefined'.

export const TimeSlotButton: React.FC<TimeSlotButtonProps> =({ time, btnVariant, style, handleClick }) => { 

    return (
        <Button 
            variant={btnVariant} 
            size='large'
            onClick={(e) => handleClick(e, time)}
            sx={{ 
                borderColor: 'rgb(46, 66, 74)',
                borderRadius: '3px',
                borderWidth: '1px',
                my: '4px',
                mr: '8px',
                p: '8px 4px',
                fontSize: '1rem',
                fontWeight: '800',
                flexGrow: 1,
                flexShrink: 1,
                minWidth: '90px',
                ...style,
                // flexBasis: 0
                // [theme.breakpoints.down('sm')]: {
                    //     fontSize: '0.8rem'
                    // }
                '@media (max-width: 690px)': {
                    fontSize: '0.8rem'
                }
            }}>
            {time}
        </Button>
    )
}

export default TimeSlotButton