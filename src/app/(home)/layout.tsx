import React, { PropsWithChildren } from "react";

import ScrollToTop from "@/components/scroll-to-top";

type HomeLayoutProps = PropsWithChildren<{
  about: React.ReactNode;
  service: React.ReactNode;
  news: React.ReactNode;
  banner: React.ReactNode;
  carouselmemberbod: React.ReactNode;
}>;

const HomeLayout = ({
  about,
  news,
  service,
  children,
  banner,
  carouselmemberbod,
}: HomeLayoutProps) => {
  return (
    <div className="flex flex-col">
      {children}
      {banner}

      <div className="relative z-10 mt-[100vh] h-max w-full flex-1 bg-white max-sm:mt-node">
        {about}
        {service}
        {carouselmemberbod}
        {news}
      </div>
      <ScrollToTop elementId="hom_gobacktop" />
    </div>
  );
};

export default HomeLayout;
