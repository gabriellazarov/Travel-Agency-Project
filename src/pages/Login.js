import { Link } from 'react-router-dom';
import Navbar from '../components/OffersComponents/Navbar';

const Login = () => {
  return (
    <>
      <Navbar />
      <p>Don't have an account?</p>
      <p>
        <Link to={'/register'}>
          <button>Register</button>
        </Link>
      </p>
    </>
  );
};

export default Login;
