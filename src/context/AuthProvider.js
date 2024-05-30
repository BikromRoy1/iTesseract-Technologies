import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Create a context
export const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(
    sessionStorage.getItem('authToken') || null
  );
  const navigate = useNavigate();

  const login = async (userLogin, userPassword, form, setSubmitting) => {
    try {
      const result = await axios.post(
        `http://10.17.20.218/itesseract/public/api/v1/login?email=${userLogin}&password=${userPassword}`
      );

      const token = result.data.authorisation.token;
      sessionStorage.setItem('authToken', token);
      setAuthToken(token);

      toast.success('User Login Successfully.', { autoClose: 2000 });
      form.reset();
      navigate('/home');
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error('Please Check Your Email and Password!');
      } else {
        toast.error(`Error: ${error.message}`);
      }
    } finally {
      setSubmitting(false);
    }
  };

  const logout = () => {
    sessionStorage.removeItem('authToken');
    setAuthToken(null);
    toast.success('User Logged Out Successfully.', { autoClose: 2000 });
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ authToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
