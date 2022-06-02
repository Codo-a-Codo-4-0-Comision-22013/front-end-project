import { Typography } from "@mui/material";
import React, { Fragment } from "react";

function ItemNavBar(props) {

    const { icon, text, onClick } = props;

    return (
        <Fragment>
            <div className="item" onClick={onClick}>
                <div className="icon" >
                    {icon}
                </div>
                <Typography color={"text.primary"}>{text}</Typography>
            </div>
        </Fragment>
    );
}

export default ItemNavBar;
