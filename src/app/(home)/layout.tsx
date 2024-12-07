import React, { PropsWithChildren } from "react";

type HomeLayoutProps = PropsWithChildren<{
  about: React.ReactNode;
  service: React.ReactNode;
  member: React.ReactNode;
  news: React.ReactNode;
  banner: React.ReactNode;  
}>;

const HomeLayout = ({
  about,
  member,
  news,
  service,
  children,
  banner,
}: HomeLayoutProps) => {
  return (
    <div>
      {banner}
      {about}
      {service}
      {member}
      {news}
      {children}
    </div>
  );
};

export default HomeLayout;