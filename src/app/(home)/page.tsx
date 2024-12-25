"use client";

import React from "react";
import { useSession } from "next-auth/react";

const HomePage = () => {
  const session = useSession();
  console.log(session);
  return <div></div>;
};

export default HomePage;
