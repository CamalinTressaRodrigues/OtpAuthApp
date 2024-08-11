import { Link } from 'react-router-dom'; // Import Link for navigation

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Welcome to the Home Page!</h1>
      <p style={styles.message}>You have successfully verified your OTP.</p>
      <Link to="/" style={styles.link}>Go to Login</Link>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  header: {
    color: '#333',
    marginBottom: '20px',
  },
  message: {
    color: '#5bc0de',
    marginBottom: '20px',
  },
  link: {
    textDecoration: 'none',
    color: '#007bff',
    fontWeight: 'bold',
    fontSize: '16px',
  },
};

export default HomePage;
