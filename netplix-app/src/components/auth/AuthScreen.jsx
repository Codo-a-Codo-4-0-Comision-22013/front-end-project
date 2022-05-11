
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';


export const AuthScreen = () => {
  return (
    <main className='container mx-auto mt-5 p-5 md:flex md:justify-center'>
      <div className=' bg-gray-100 rounded-lg shadow-xl p-8'>

        <LoginForm />

    <br />
     
        <RegisterForm />
     
      </div>
    </main>
  );
};
