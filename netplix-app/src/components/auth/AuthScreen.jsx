//import { LoginForm } from './LoginForm';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';
import './authStyles.css'

export const AuthScreen = () => {
  return (
    <div className='auth-form'>
      <h1>form</h1>
      <LoginForm />

      <hr />
      <br />
      <RegisterForm />
    </div>
  );
};
