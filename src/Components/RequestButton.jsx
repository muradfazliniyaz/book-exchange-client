import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const RequestTwoButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      className="nav-button"
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Request
    </button>
  );
};

export default RequestTwoButton;
