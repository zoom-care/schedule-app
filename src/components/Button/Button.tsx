import React from 'react';

import styles from './Button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type ButtonProps = {
  label: string;
  type?: 'submit' | 'button';
  isDisabled?: boolean;
  onClick?: () => void;
}

const Button = ({ label, type = 'button', isDisabled = false, onClick }: ButtonProps) => {
  return (
    <button data-testid='button' className={cx('button')} type={type} disabled={isDisabled} onClick={onClick}>
      <span className={cx('label')}>{label}</span>
    </button>
  );
};

export default Button;
