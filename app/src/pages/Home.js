import React, { useContext } from "react";

import { UserContext } from "../context/userContext";

import Header from "../components/micro/header/Header";
import HeaderUser from "../components/micro/header/HeaderUser";
import HomeUser from "../components/macro/HomeUser";

export default function Home() {
  const [userState, dispatchUserr] = useContext(UserContext);

  return (
    <div>
      {userState.isLogin ? <HeaderUser /> : <Header />}

      <HomeUser />
    </div>
  );
}
