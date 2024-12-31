import ScrollToTop from "@/components/scroll-to-top";
import React, { PropsWithChildren } from "react";

type HomeLayoutProps = PropsWithChildren<{
  about: React.ReactNode;
  service: React.ReactNode;
  news: React.ReactNode;
  banner: React.ReactNode;
}>;

const HomeLayout = ({
  about,
  news,
  service,
  children,
  banner,
}: HomeLayoutProps) => {
  return (
    <div className="pb-20">
      {children}
      {banner}
      {about}
      {service}
      {news}
      <ScrollToTop elementId="hom_gobacktop" />
    </div>
  );
};

export default HomeLayout;
