import { Link } from 'react-router-dom';
import Navbar from '../components/OffersComponents/Navbar';

const Register = () => {
  return (
    <>
      <Navbar />
      <p>Already have an account?</p>
      <p>
        <Link to={'/login'}>
          <button>Login</button>
        </Link>
      </p>
    </>
  );
};

export default Register;
