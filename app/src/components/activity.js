import React from "react";

const Activity = (props) => {
    return (
        <a class="activity" style={{ backgroundImage: `url(.${props.src})` }}>
            <p class="name">{props.name}</p>
        </a>
    );
};

export default Activity;