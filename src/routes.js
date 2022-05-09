import { BrowserRouter,Routes, Route, Switch } from "react-router-dom";
import Login from "./components/login/login";
import Profile from "./components/profile/profile";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Login></Login>}></Route>
                <Route path="/something" element={<Profile></Profile>}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;