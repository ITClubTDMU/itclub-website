import React from "react";

import SectionTitle from "../section/title";
import AppImage from "../ui/app-image";

const Footer = () => {
  return (
    <div className="mt-auto flex w-full items-center justify-center gap-40 px-[40px] h-max py-20 shadow-inner max-xs:flex-col max-xs:gap-20 max-xs:px-[10px]">
      <div className="organization flex items-center">
        <AppImage
          ratio={1}
          src={"/logo.png"}
          alt="itclub logo"
          container="w-40 h-40"
        />
      </div>

      <div className="flex flex-col">
        <SectionTitle text="Liên hệ" />
        <Info label="Email:" text="clbit@tdmu.edu.vn" />
        <Info label="Fanpage:" text="facebook.com/TDMU.IT.CLUB" />
        <Info
          label="Địa chỉ:"
          text="Số 06, Trần Văn Ơn, Phú Hòa, Thủ Dầu Một, Bình Dương"
        />
      </div>
    </div>
  );
};

type TInfoProps = {
  label: string;
  text: string;
};
const Info = ({ label, text }: TInfoProps) => {
  return (
    <div className="flex gap-node text-wrap max-xs:gap-3">
      <span className="mr-auto w-[80px]">{label}</span>
      <span className="flex-1 text-wrap">{text}</span>
    </div>
  );
};
export default Footer;
