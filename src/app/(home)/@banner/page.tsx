import React from "react";

import AppImage from "@/components/ui/app-image";

const Banner = () => {
  return (
    <div className="fixed left-0 top-[var(--affix-header)] h-max w-full overflow-hidden max-sm:relative max-sm:top-0 max-sm:z-10">
      <AppImage
        src={"/banner_itclub.jpg"}
        ratio={2.24 / 1.1}
        className="object-cover"
        alt="fallback"
      />
    </div>
  );
};

export default Banner;
