import React, { Fragment, useState } from "react";
import './NavBar.css';
// components
import Profile from './Profile';
import ItemNavBar from "./ItemNavBar";
// icons
import TocIcon from '@mui/icons-material/Toc';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LogoutIcon from '@mui/icons-material/Logout';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';

function NavBar(props) {
    const { name, avatar } = props;

    const [isDarkMode, setDarkMode] = useState(false);
    const handleDarkMode = () => {
        setDarkMode(!isDarkMode);
    };

    const [isLoged, setLoged] = useState(true);
    const handleLoged = () => {
        setLoged(!isLoged);
    };

    return (
        <Fragment>
            <div className="sidebar">

                <div className="menu-icon">
                    <TocIcon />
                </div>

                <Profile name={name} avatar={avatar} />

                <div className="group-items">
                     <ItemNavBar icon = {<AssignmentIndIcon />} text = "Perfil" />
                     <ItemNavBar onClick = {handleLoged} icon = {<LogoutIcon />} text = {(isLoged) ? "Cerrar sesión" : "Iniciar sesión"} />
                </div>

                <div className="group-items">
                    <ItemNavBar icon = {<SportsSoccerIcon />} text = "Jugar" />
                </div>

                <div className="group-items">
                    <ItemNavBar onClick = {handleDarkMode} icon={<SettingsBrightnessIcon />} text={(isDarkMode) ? "Light Mode" : "Dark Mode"} />
                </div>
            </div>
        </Fragment>
    );
}

export default NavBar;