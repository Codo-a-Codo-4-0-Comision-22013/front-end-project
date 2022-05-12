import { BrowserRouter,Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Navbar from "./components/navbar/navbar";
import Profile from "./components/profile/profile";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar/>}>
                    <Route path="home" element={<Login/>}></Route>
                    <Route path="something" element={<Profile></Profile>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;