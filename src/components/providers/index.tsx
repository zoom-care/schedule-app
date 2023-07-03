import React from 'react';
import { Provider } from '../../zoomcare-api';

export interface ProviderProps {
    provider: Provider;
    clinicName: string;
    clinicLocation: string;
    appointmentSlots: string[];
    clinicCity: string;
    clinicState: string;
    clinicZipCode: string
}

export const StethoscopeIcon: React.FC = () => {
    return (
        <div
            style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: '#F0F0F0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <span
                role="img"
                aria-label="Stethoscope Icon"
                style={{
                    fontSize: '40px',
                    color: '#C1C1C1',
                }}
            >
                🩺
            </span>
        </div>
    );
}

const getHours = (array: string[]): [string, string][] => {
    const hours: [string, string][] = [];
    array.forEach((string) => {
        const matches = string.match(/(\d{2}:\d{2})(-\d{2}:\d{2})$/);
        if (matches && matches.length === 3) {
            const startTime = matches[1];
            const finishTime = matches[2].substring(1);
            hours.push([startTime, finishTime]);
        }
    });
    return hours;
};

const renderButtons = (hours: [string, string][]): JSX.Element[] => {

    const buttons: JSX.Element[] = [];

    hours.forEach(([starTime, finishTime], index) => {
        buttons.push(
            <div key={index} style={{ display: "flex" }}>
                <div
                    style={{
                        fontSize: "16px",
                        padding: "10px",
                        backgroundColor: "#2E424A",
                        color: "#FFFFFF",
                        fontWeight: "600",
                        marginTop: "3px",
                        marginRight: "5px",
                        cursor: "pointer"
                    }}
                >
                    {starTime}
                </div>
                <div
                    style={{
                        fontSize: "16px",
                        padding: "10px",
                        backgroundColor: "#2E424A",
                        color: "#FFFFFF",
                        fontWeight: "600",
                        marginTop: "3px",
                        cursor: "pointer"
                    }}
                >
                    {finishTime}
                </div>
            </div>
        );
    });

    return buttons.reverse();
};

const ProviderComponent: React.FC<ProviderProps> = ({
    provider,
    clinicName,
    clinicLocation,
    appointmentSlots,
    clinicState,
    clinicCity,
    clinicZipCode
}) => {

    const { name, credentials, phoneNumber } = provider;
    const fontStyle = { color: "#2E424A", margin: "0px" };
    const hours = getHours(appointmentSlots);

    return (
        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-start", flexDirection: "column", width: "100%", border: "1px solid #ECECEC", padding: "15px", backgroundColor: "#FFFFFF", textAlign: "left" }}>
            <div className='header'>
                <label style={{ ...fontStyle, fontSize: "20px", fontWeight: "700" }}>{clinicName}</label>
                {clinicLocation && <p style={{ ...fontStyle, fontSize: "16px", margin: "0px", fontWeight: "600" }}>{clinicLocation}</p>}
                {clinicState && clinicCity && clinicZipCode && <p style={{ ...fontStyle, fontSize: "16px", margin: "0px", fontWeight: "600" }}>{`${clinicCity}, ${clinicState}, ${clinicZipCode}`}</p>}
            </div>
            <div className='body' style={{ display: "flex", marginTop: "10px" }}>
                <div className='icon'>
                    <StethoscopeIcon />
                </div>
                <div className='body-content' style={{ height: "100%", display: "flex", flexDirection: "column", marginLeft: "15px", justifyContent: "flex-start:", alignItems: "flex-start" }}>
                    <p style={{ ...fontStyle, fontSize: "20px", fontWeight: "700", color: "#22BFE7" }}>{`${name}, ${credentials}`}</p>
                    <p style={{ ...fontStyle, fontSize: "15px", fontWeight: "500", marginTop: "2px" }}>{phoneNumber}</p>
                    {renderButtons(hours)}
                </div>
            </div>
        </div>
    );
};

export default ProviderComponent;
