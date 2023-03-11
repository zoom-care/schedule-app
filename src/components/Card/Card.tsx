import React from 'react';
import classNames from 'classnames/bind';
import Button from '../Button/Button';
import { CardProps } from '../../types/card.types';
import styles from './Card.module.scss';

const cx = classNames.bind(styles);

export default function Card({ appointments }: CardProps): JSX.Element {  
  return (
    <div className={cx('card-container')} data-testId='card'>
      {appointments.map((appointment) => (
        <div className={cx('clinic')} key={appointment.id}>
          <p className={cx('title')}>{appointment.name}</p>
          <p className={cx('subtitle')}>{appointment.address}</p>
          <p className={cx('subtitle')}>
            {appointment.city}, {appointment.state}
          </p>
          <div className={cx('provider')}>
            {appointment.appointments.length
              ? appointment.appointments.map(({ provider, list }) => (
                  <div className={cx('provider-info')} key={provider.id}>
                    <img className={cx('img-profile')} src={'provider.png'} alt='' />
                    <div className={cx('provider-contact')}>
                      <span>
                        <p className={cx('credentials')}>
                          {provider.name} {provider.credentials}
                        </p>
                        {provider.phoneNumber}
                      </span>
                      <div className={cx('appointment-info')}>
                        {list.map((element) => (
                          <div className={cx('button')} key={element.id}>
                            <Button label={element.formatedTime} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      ))}
    </div>
  );
}
