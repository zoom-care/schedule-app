import React from 'react';
import styles from './Clinic.module.scss';
import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { clinicStore } from '../../store/clinics';
import Card from '../Card/Card';
import Button from '../Button/Button';

const cx = classNames.bind(styles);

export default function Clinic(): JSX.Element {
  const loading = clinicStore((state) => state.loading);
  const logout = clinicStore((state) => state.userLoout);
  const getClinicsAppointments = clinicStore((state) => state.getClinicsAppointments);
  const appointmentsByProvider = clinicStore((state) => state.appointmentsByProvider);

  useEffect(() => {
    getClinicsAppointments();
  }, [getClinicsAppointments]);

  return (
    <>
      <div className={cx('clinic-container')}>
        <span className={cx('title')}>
          Clinics with Appointments
          <Button label='Logout' onClick={logout} />
        </span>
        {loading ? <p className={cx('loading')}>Loading... </p> : <Card appointments={appointmentsByProvider} />}
      </div>
    </>
  );
}
