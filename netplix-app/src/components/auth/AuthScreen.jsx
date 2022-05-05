//import { LoginForm } from './LoginForm';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';
import './authStyles.css';

export const AuthScreen = () => {
  return (
    <div className="container-form">
      <div className="auth-form">
        <LoginForm />

        <hr />
        <br />
        <RegisterForm />
      </div>
    </div>
  );
};
