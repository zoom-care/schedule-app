import { ReactNode } from 'react';
import { AppointmentSlot, Clinic } from './zoomcare-api';

export type ChildrenProps = {
  children: ReactNode;
};

export type AppointCardProps = {
  clinic: Clinic;
  slot: AppointmentSlot;
};

export type AppointCardHeaderProps = {
  clinic: Clinic;
};

export type AppointCardBodyProps = {
  slot: AppointmentSlot;
};
