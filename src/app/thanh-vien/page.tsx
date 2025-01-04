import React from "react";

import Member from "@/components/member";
import ScrollToTop from "@/components/scroll-to-top";

const MemberPage = () => {
  return (
    <>
      <Member />
      <ScrollToTop elementId="member_backToTop" />
    </>
  );
};

export default MemberPage;
