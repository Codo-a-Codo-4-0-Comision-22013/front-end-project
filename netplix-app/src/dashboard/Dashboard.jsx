import { Outlet } from 'react-router-dom';

export const Dashboard = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <Outlet />
    </>
  );
};
