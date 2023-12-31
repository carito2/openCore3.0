import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LogOutButton ({ className }) {
    const { logout } = useAuth0();

    return (
        <button 
            className={className}
            onClick={() => logout({ returnTo: window.location.origin })}>
            Log Out
        </button>
    )
};

export default LogOutButton;