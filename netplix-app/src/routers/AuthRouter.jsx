import { Route, Routes } from "react-router-dom";
import { Login } from "../auth/pages/Login";
import { NuevoPassword } from "../auth/pages/NuevoPassword";
import { OlvidePassword } from "../auth/pages/OlvidePassword";
import { Registrar } from "../auth/pages/Registrar";

export const AuthRouter = () => {
  return (
    <>
      <main className="container mx-auto mt-5 p-5 md:flex md:justify-center">
        <div className=" bg-gray-100 rounded-lg shadow-xl p-8">
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="registro" element={<Registrar />} />
            <Route path="olvide-password" element={<OlvidePassword />} />
            <Route path="olvide-password/:token" element={<NuevoPassword />} />
          </Routes>
        </div>
      </main>
    </>
  );
};
