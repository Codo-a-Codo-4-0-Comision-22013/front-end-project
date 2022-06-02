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

<<<<<<< HEAD
export default Profile;
=======
export default Profile;
>>>>>>> origin/main
