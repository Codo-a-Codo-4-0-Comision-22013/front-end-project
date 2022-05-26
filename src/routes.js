import { BrowserRouter,Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Navbar from "./components/navbar/navbar";
import Profile from "./components/profile/profile";
import Demo from "./components/movie/demo";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar/>}>
                    <Route path="movie" element={<Demo/>} ></Route>
                    <Route path="home" element={<Login/>}></Route>
                    <Route path="something" element={<Profile></Profile>}></Route>
                    **<Route path="*" element={<h1>404</h1>}></Route>**
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
