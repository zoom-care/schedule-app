import React from 'react';
import { ApointmentListItem } from '../../model/ApointmentListItem';
import providerImage from './provider.png';
import moment from 'moment'
import notificationService from '../../services/notification-service';

interface AppointmentItemProps {
    items: ApointmentListItem[];
}

const AppointmentItem: React.FC<AppointmentItemProps> = ({ items }) => {



    return <>
        {items.map(item => {
            const key = `${item.clinicId}|${item.providerId}`;
            
            return (
                <React.Fragment key={key}>
                    <div className='appointment-item appointment-item__container'>
                        <p>{item.clinicName}</p>
                        <p>{item.clinicAddress}</p>
                        <p>{item.clinicCity}, {item.clinicZipcode}</p>
                        <div className='appointment-item appointment-item__provider'>
                            <img src={providerImage} alt="" />
                            <div className='appointment-item appointment-item__provider-info'>
                                <p>{item.providerName}</p>
                                <p>{item.providerPhoneNumber}</p>
                                <div className='appointment-item appointment-item__buttons'>
                                    {item.appointments.map(apointment => {
                                        const time = moment(apointment.startTime).format('LT');
                                        return (
                                            <button className='btn btn-primary' onClick={() => notificationService.notifySuccess(`You have pressed the button ${time} for ${item.clinicName}/${item.providerName}`)}>{time}</button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            );
        })}
    </>;
};

export default AppointmentItem;
