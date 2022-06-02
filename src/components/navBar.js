import React, { Fragment, useState, useContext } from "react";
// contexts
import { useAuth } from "../context/authContext";
import { ColorModeContext } from "../context/colorModeContext"
// components
import Profile from './profile';
import ItemNavBar from "./itemNavBar";
// icons
import TocIcon from '@mui/icons-material/Toc';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LogoutIcon from '@mui/icons-material/Logout';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
// style
import './navBar.css';
import { Box } from "@mui/material";

function NavBar(props) {
    const { name, avatar } = props;
    const { logout, user } = useAuth();

    const { mode, toggleColorMode } = useContext(ColorModeContext);


    // const [isDarkMode, setDarkMode] = useState(false);

    const handleDarkMode = () => {
        // setDarkMode(!isDarkMode);
        toggleColorMode();
        console.log(mode);
    };

    const [isLoged, setLoged] = useState(true);

    const handleLoged = () => {
        // setLoged(!isLoged);
        logout();
    };

    return (
        (user) && <Fragment>

            <Box className="sidebar"
                sx={{ bgcolor: "background.default" }}>

                <div className="menu-icon">
                    <TocIcon />
                </div>

                <Profile name={name} avatar={avatar} />

                <div className="group-items">
                    <ItemNavBar icon={<AssignmentIndIcon />} text="Perfil" />
                    <ItemNavBar onClick={handleLoged} icon={<LogoutIcon />} text={(isLoged) ? "Cerrar sesión" : "Iniciar sesión"} />
                </div>

                <div className="group-items">
                    <ItemNavBar icon={<SportsSoccerIcon />} text="Jugar" />
                </div>

                <div className="group-items">
                    <ItemNavBar onClick={handleDarkMode} icon={<SettingsBrightnessIcon />} text={(mode === 'light') ? "Dark Mode" : "Light Mode"} />
                </div>
            </Box>
        </Fragment>
    );
}

export default NavBar;