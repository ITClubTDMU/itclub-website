"use client";

import React from "react";

// import Member from "@/components/member";
// import ScrollToTop from "@/components/scroll-to-top";
import { useLoadingStore } from "@/stores/loadingStore";
import ComingSoon from "@/components/coming-soon";

const MemberPage = () => {
  const updateLoadingApp = useLoadingStore(state => state.updateLoading);

  React.useEffect(() => {
    updateLoadingApp(false);
  }, []);
  
  return (
    <div>
      {/* <Member />
      <ScrollToTop elementId="member_backToTop" /> */}
      <ComingSoon />
    </div>
  );
};

export default MemberPage;
