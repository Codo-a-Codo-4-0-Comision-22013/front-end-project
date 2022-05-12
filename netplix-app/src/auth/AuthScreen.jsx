import { Outlet } from 'react-router-dom';

export const AuthScreen = () => {
  return (
    <main className="container mx-auto mt-5 p-5 md:flex md:justify-center">
      <div className=" bg-gray-100 rounded-lg shadow-xl p-8">
        <Outlet />
      </div>
    </main>
  );
};
