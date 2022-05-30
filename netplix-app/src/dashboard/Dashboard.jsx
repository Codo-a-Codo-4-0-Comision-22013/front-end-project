import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar";

export const Dashboard = () => {
  return (
    <>
      <div className="md:flex md:min-h-screen">
        <NavBar />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
