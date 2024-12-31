import React from "react";

import  { TAppImageProps } from "@/components/ui/app-image";
import SectionHeading from "@/components/section/heading";

import SectionService from "./section-service";

const services: {
  content?: string;
  imageProps?: Omit<TAppImageProps, "src"> & {
    src: string;
  };
}[] = [
  {
    content:
      "CLB IT TDMU mang đến các buổi học, các buổi ôn tập chuyên môn và bài tập thực tế nhằm giúp các thành viên nâng cao kiến thức chuyên ngành và kỹ năng lập trình.",
    imageProps: { src: "/hocthuat.png", alt: "alla", objectFit: "contain" },
  },
  {
    content:
      "Là cầu nối giúp các thành viên giao lưu, học hỏi từ các anh chị đi trước, thầy cô và những người có kinh nghiệm trong lĩnh vực công nghệ thông tin.",
    imageProps: {
      src: "/giaoluu_ketnoi.png",
      alt: "alla",
      objectFit: "contain",
    },
  },
  {
    content:
      "Tạo điều kiện ôn tập và rèn luyện, giúp thành viên tự tin tham gia các cuộc thi lập trình như Olympic Tin học, lập trình quốc tế ICPC, Hội thi lập trình sinh viên TDMU và nhiều sân chơi bổ ích khác. Thông qua đó, không chỉ nâng cao năng lực lập trình mà còn có cơ hội gặt hái thành tích nổi bật, khẳng định bản thân và mang lại kinh nghiệm cho bản thân.",
    imageProps: { src: "/thidau.png", alt: "alla", objectFit: "contain" },
  },
];

const ServicePage = () => {
  return (
    <div
      className="section_home flex flex-col justify-center"
      id="gia-tri-mang-lai"
    >
      <SectionHeading text="giá trị mang lại" />
      <div className="flex w-full flex-col gap-node">
        {services.map((service, index) => (
          <SectionService
            key={index + 1}
            content={service.content}
            imageProps={service.imageProps}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
