import { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import Navbar from '../SharedComponents/Navbar';

const UserProfile = () => {
  const authCtx = useContext(AuthContext);


  return (
    <>
      <Navbar />
      <p>hello, {authCtx.email}</p>
    </>
  );
};

export default UserProfile;
