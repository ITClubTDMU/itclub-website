import React from "react";

import AppImage from "@/components/ui/app-image";
import SectionHeading from "@/components/section/heading";

const AboutPage = () => {
  return (
    <div
      className="section_home flex h-max flex-col justify-center"
      id="about-us"
    >
      <SectionHeading text="Về câu lạc bộ IT" />
      <div className="grid grid-cols-2 gap-node max-xs:grid-cols-none">
        <AppImage
          src={"/icpc.jpg"}
          alt="aboutus"
          ratio={16 / 9}
          container="max-xs:order-2"
        />
        <div className="flex flex-col">
          <p className="mb-node flex-1">
            Câu lạc bộ (CLB) IT Viện Công nghệ thông tin và Chuyển đổi số nghệ
            được thành lập năm 2014 với mục đích ban đầu là nơi chia sẻ kiến
            thức, thông tin, kinh nghiệm học tập trong lĩnh vực công nghệ thông
            tin của các sinh viên với nhau. Thế nhưng hiện nay, vượt khỏi giới
            hạn ban đầu, CLB IT đã có nhiều hoạt động hữu ích khác, đóng góp cho
            sự phát triển lớn mạnh của khoa cũng như nhà trường, là cầu nối giữa
            sinh viên với sinh viên, sinh viên với nhà trường.
          </p>
          {/* <div className="mt-auto flex flex-col">
            <SectionTitle text="Cam kết" />
            <Accordion
              type="single"
              collapsible
              className="flex flex-1 flex-col justify-between"
              defaultValue="item-0"
            >
              {Array.from({ length: 3 }).map((_, index) => (
                <AccordionItem
                  key={index + 1}
                  value={`item-${index}`}
                  className="border-b-primary/40"
                >
                  <AccordionTrigger>Is it accessible? {index}</AccordionTrigger>
                  <AccordionContent>
                    <p className="line-clamp-2">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores nam impedit fugiat dolor distinctio, ex beatae!
                      Dolor animi, magnam dicta sed non modi sit itaque repellat
                      quaerat amet quasi harum.Lorem ipsum, dolor sit amet
                      consectetur adipisicing elit. Maiores nam impedit fugiat
                      dolor distinctio, ex beatae! Dolor animi, magnam dicta sed
                      non modi sit itaque repellat quaerat amet quasi
                      harum.Lorem ipsum, dolor sit amet consectetur adipisicing
                      elit. Maiores nam impedit fugiat dolor distinctio, ex
                      beatae! Dolor animi, magnam dicta sed non modi sit itaque
                      repellat quaerat amet quasi harum.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
