
import { LoginForm } from './LoginForm';
// import { RegisterForm } from './RegisterForm';


export const AuthScreen = () => {
  return (
    <main className='container mx-auto mt-5 p-5 md:flex md:justify-center'>
      <div className='md:w-1/3 bg-gray-100 rounded-lg shadow-xl p-8'>

        <LoginForm />

     
        {/* <RegisterForm /> */}
     
      </div>
    </main>
  );
};
