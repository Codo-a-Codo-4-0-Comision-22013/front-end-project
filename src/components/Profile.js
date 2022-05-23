import React, { Fragment } from "react";

function Profile(props) {
    const { name, avatar } = props;
    
    return (
        <Fragment>
            <div className="profile">
                <img src={avatar} alt={name} />
            </div>
            <div className="nicname">{name}</div>
        </Fragment>
    )
}

export default Profile;