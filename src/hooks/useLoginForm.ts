import React, { useState, useEffect, ChangeEvent } from 'react'
import { LoginForm } from '../types/login.types';

export const useLoginForm = (initialState: LoginForm) => {
  const [formData, setFormData] = useState(initialState);
  const [validInput, setValidInput] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  
  useEffect(() => {
    const valid = Object.values(formData).every(input => input.length);
    setValidInput(valid);
  }, [formData]);

  return { formData, handleInputChange, validInput };
}