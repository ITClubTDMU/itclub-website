"use client";

import React from "react";

import Member from "@/components/member";
import ScrollToTop from "@/components/scroll-to-top";
import { useLoadingStore } from "@/stores/loadingStore";

const MemberPage = () => {
  const updateLoadingApp = useLoadingStore(state => state.updateLoading);

  React.useEffect(() => {
    updateLoadingApp(false);
  }, []);
  
  return (
    <>
      <Member />
      <ScrollToTop elementId="member_backToTop" />
    </>
  );
};

export default MemberPage;
