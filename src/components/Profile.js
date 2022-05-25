import { Typography } from "@mui/material";
import React, { Fragment } from "react";

function Profile(props) {
    const { name, avatar } = props;

    return (
        <Fragment>
            <div className="profile">
                <img src={avatar} alt={name} />
            </div>
            <Typography color={"text.primary"} className="nicname">{name}</Typography>
        </Fragment>
    )
}

export default Profile;