"use client";

import React from "react";
import { motion } from "motion/react";

import AppImage from "@/components/ui/app-image";
import SectionHeading from "@/components/section/heading";

const AboutPage = () => {
  return (
    <div
      className="section_home flex h-max flex-col justify-center"
      id="about-us"
    >
      <SectionHeading text="Về câu lạc bộ IT" />
      <div className="mx-auto grid w-[80%] grid-cols-4 items-center gap-40 max-xs:w-full max-sm:grid-cols-none max-sm:gap-3">
        <motion.div
          className="col-span-2 h-max max-sm:order-2 max-sm:mx-auto max-sm:max-w-[80%]"
          initial={{
            rotate: -90,
            translate: "-200px 200px",
          }}
          whileInView={{
            rotate: 0,
            translate: "0px 0px",
            transition: { duration: 1, ease: "easeInOut" },
          }}
          viewport={{ once: true }}
        >
          <AppImage src={"/aboutus.png"} alt="aboutus" ratio={3 / 4} />
        </motion.div>

        <div className="col-span-2 flex flex-col">
          <motion.p
            className="mb-node flex-1 font-medium leading-[2] md:text-lg max-sm:px-[2rem]"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 1, ease: "easeInOut" },
            }}
            viewport={{ once: true }}
          >
            Câu lạc bộ (CLB) IT thuộc Viện Công nghệ thông tin và Chuyển đổi số,
            thành lập ngày 07/11/2014, là nơi dành cho các bạn sinh viên yêu
            thích và theo đuổi đam mê trong các lĩnh vực công nghệ thông tin.
            Với mục đích xây dựng một cộng đồng vững mạnh, chúng tôi tạo ra môi
            trường giao lưu, học hỏi, giúp các bạn sinh viên gắn kết, hỗ trợ lẫn
            nhau và cùng phát triển trên hành trình chinh phục kiến thức và sự
            nghiệp trong lĩnh vực này.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
