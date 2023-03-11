import React, { FormEvent } from 'react';
import { useLoginForm } from '../../hooks/useLoginForm';
import { LoginForm } from '../../types/login.types';
import Button from '../Button/Button';

import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import { clinicStore } from '../../store/clinics';

const cx = classNames.bind(styles);

const INITIAL_STATE: LoginForm = {
  username: '',
  password: '',
};

export default function Login(): JSX.Element {
  const login = clinicStore(state => state.userLogin);
  const { formData, handleInputChange, validInput } = useLoginForm(INITIAL_STATE);
  const { username, password } = formData;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <>
      <div className={cx('form-container')}>
        <span className={cx('title')}>Schedule-App</span>
        <form className={cx('login')} onSubmit={handleSubmit}>
          <input
            className={cx('input')}
            type='text'
            name='username'
            placeholder='Username'
            value={username}
            onChange={handleInputChange}
          />
          <input
            className={cx('input')}
            type='password'
            name='password'
            placeholder='Password'
            value={password}
            onChange={handleInputChange}
          />
          <Button label='Login' type='submit' isDisabled={!validInput} />
        </form>
      </div>
    </>
  );
}
