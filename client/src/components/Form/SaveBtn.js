import React from "react";

export const SaveBtn = props => (
    <button {...props} className="btn btn-success">
    {props.children}
    </button>
);