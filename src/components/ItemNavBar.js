import React, { Fragment } from "react";

function ItemNavBar(props) {

    const { icon, text, onClick } = props;

    return (
        <Fragment>
            <div className="item" onClick = {onClick}>
                <div className="icon" >
                    {icon}
                </div>
                <span>{text}</span>
            </div>
        </Fragment>
    );
}

export default ItemNavBar;