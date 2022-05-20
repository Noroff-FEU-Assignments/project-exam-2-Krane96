import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../utils/context";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const LoggedInPanel = () => {
  const [auth, setAuth] = useContext(AuthContext);
  return (
    <></>
  );
};

export default LoggedInPanel;