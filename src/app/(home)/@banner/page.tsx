import React from "react";

import AppImage from "@/components/ui/app-image";

const Banner = () => {
  return (
    <div className="max-h-[calc(100vh-var(--affix-header))] mt-[var(--affix-header)] overflow-hidden mb-section">
      <AppImage src={"/testimg_full.jpg"} ratio={16 / 9} alt="fallback" />
    </div>
  );
};

export default Banner;
