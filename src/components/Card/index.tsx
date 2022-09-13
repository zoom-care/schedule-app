import { FC, useEffect } from "react";
import Title from "../shared/Title";
import ImageContainer from '../shared/Image/index';
import { CardContainer, ProviderContainer, ProviderContent } from "./styles";
import Button from "../shared/Button";
import { DEFAULT_IMAGE } from "../../constants/defaultImages";
import { IAppointment } from "../../interfaces/appointment.interface";
import { IClinic } from "../../interfaces/clinic.interface";
import { formatAMPM } from "../../utils/formatDateTime.utils";

interface IProps {
    clinic: IClinic
    appointments: IAppointment
}

const Card: FC<IProps> = ({ clinic, appointments }) => {
    const { address, city, state, zipcode } = clinic;
    const { credentials, phoneNumber, name } = appointments.provider;
    const { startTime } = appointments;

    return (
        <CardContainer>
            <Title title={clinic.name} subtitle={address} secondSubtitle={`${city}, ${state} ${zipcode}`} />

            <ProviderContainer>
                <ImageContainer rounded src={DEFAULT_IMAGE} />
                <ProviderContent>
                    <Title 
                        title={`${name}, ${credentials}`} 
                        subtitle={phoneNumber} 
                        titleColor="secondary"
                    />
                    <Button value={formatAMPM(startTime)} />
                </ProviderContent>
            </ProviderContainer>
        </CardContainer>
    );
}

export default Card;