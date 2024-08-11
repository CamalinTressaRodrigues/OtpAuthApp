import  { useState } from 'react';
import axiosInstance from './axiosinterceptor'; 
import PropTypes from 'prop-types'; 

const SendOtpForm = ({ onOtpSent }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/otp/sendOtp', { email });
      setMessage(response.data.message);
       if (response.status === 200) {
         console.log('OTP sent, calling onOtpSent');
         onOtpSent(); 
       }
    } catch (error) {
      setMessage('Error sending OTP. Please try again.');
    }
  };

  return (
<div style={styles.container}>
      <h2 style={styles.header}>Send OTP</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>Send OTP</button>
      </form>
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

SendOtpForm.propTypes = {
  onOtpSent: PropTypes.func.isRequired, 
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    boxSizing: 'border-box',
  },
  button: {
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  message: {
    marginTop: '15px',
    color: '#d9534f',
    textAlign: 'center',
  },
};


//     <div>
//       <h2>Send OTP</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Send OTP</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

SendOtpForm.propTypes = {
  onOtpSent: PropTypes.func.isRequired, 
};

export default SendOtpForm;
