import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoutes = () => {
  const userModeValue = useSelector((state) => state.userInfo);
  let modeValue = null;
  modeValue = useSelector((state) => state.userInfo.userModeValue);
  // console.log("modeValue", modeValue)

  return (
    modeValue != null ? (
      <Outlet />
    ) : (
      <Navigate
        to={{
          pathname: "/",
        }}
      />))
};

export default ProtectedRoutes;
