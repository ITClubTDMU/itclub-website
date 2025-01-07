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
    <div className="pb-20">
      {children}
      {banner}
      {about}
      {service}
      {carouselmemberbod}
      {news}
      <ScrollToTop elementId="hom_gobacktop" />
    </div>
  );
};

export default HomeLayout;
