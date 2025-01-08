"use client";

import React from "react";

import { useTriggerLoadingApp } from "@/hooks/useTriggerLoadingApp";

const HomePage = () => {
  useTriggerLoadingApp(false);

  return <div></div>;
};

export default HomePage;
