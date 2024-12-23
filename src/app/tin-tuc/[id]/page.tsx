import React from "react";

import AppImage from "@/components/ui/app-image";

const DetailNews = () => {
  return (
    <div className="min-h-screen pb-20">
      <div className="relative h-max w-full">
        <AppImage
          src={"/icpc.jpg"}
          ratio={16 / 9}
          alt="banner-activity"
          container="max-h-[calc(100vh-var(--affix-header)-70px)] overflow-hidden mb-section"
        />
      </div>

      <div className="mx-auto max-w-[720px] px-6">
        <p>
          Như các bạn đã biết, phong tục lì xì trong ngày Tết Nguyên Đán là một
          nét đẹp văn hóa của người Việt với mong muốn chúc nhau những điều tốt
          đẹp may mắn sẽ đến trong những ngày đầu năm mới
        </p>
        <br />
        <p>Bạn thuộc team nào trong các team nhận lì xì dưới đây</p>
        <br />
        <p>
          #MangTetvenha2024
          <br />
          #TrunguongDoan
          <br />
          #SuntoryPepsiCoVietnam
        </p>

        <div className="grid grid-cols-2">
          <AppImage
            src={"/icpc.jpg"}
            ratio={1}
            alt="banner-activity"
            container="w-full"
          />
          <AppImage
            src={"/icpc.jpg"}
            ratio={1}
            alt="banner-activity"
            container="w-full"
          />
          <AppImage
            src={"/icpc.jpg"}
            ratio={1}
            alt="banner-activity"
            container="w-full"
          />
          <AppImage
            src={"/icpc.jpg"}
            ratio={1}
            alt="banner-activity"
            container="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailNews;
