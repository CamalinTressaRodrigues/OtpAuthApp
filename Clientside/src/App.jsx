import  { useState } from 'react';
import SendOtpForm from './components/EmailForm';
import VerifyOtpForm from './components/OtpForm';
// import { Route, Routes } from 'react-router-dom';
// import HomePage from './components/Homepage.jsX';
// import HomePage from './components/Homepage';

const App = () => {
  const [otpSent, setOtpSent] = useState(false);

  const handleOtpSent = () => {
    setOtpSent(true); 
  };

  return (
     <div>
        {!otpSent ? (
          <SendOtpForm onOtpSent={handleOtpSent} />
        ) : (
          <VerifyOtpForm />
        )}
      </div>
)};

export default App;
