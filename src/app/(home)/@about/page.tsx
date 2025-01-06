"use client";

import React from "react";
import { motion } from "motion/react";

import AppImage from "@/components/ui/app-image";
import SectionHeading from "@/components/section/heading";

const AboutPage = () => {
  return (
    <div className="section_home flex flex-col justify-center" id="about-us">
      <SectionHeading text="Về câu lạc bộ IT" />
      <div className="mx-auto grid w-[80%] grid-cols-4 items-center gap-40 max-xs:w-full max-sm:grid-cols-none max-sm:gap-3">
        <motion.div
          className="col-span-2 w-full max-sm:order-2 max-sm:mx-auto max-sm:max-w-[80%]"
          initial={{
            opacity: 0,
            scale: 0,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { duration: 1, ease: "easeInOut" },
          }}
          viewport={{ once: true }}
        >
          <AppImage
            src={"/aboutus.webp"}
            alt="aboutus"
            ratio={3 / 4}
            sizes="(min-width: 1320px) 573px, (min-width: 920px) calc(46.05vw - 26px), (min-width: 520px) calc(85.26vw - 40px), calc(106.5vw - 21px)"
          />
        </motion.div>

        <div className="col-span-2 flex flex-col">
          <motion.p
            className="mb-node flex-1 leading-[2] md:text-lg max-sm:px-[2rem]"
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
