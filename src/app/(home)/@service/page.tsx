"use client";

import React from "react";
import { motion } from "motion/react";

import SectionHeading from "@/components/section/heading";

import CardService from "./card-service";
import { services } from "./services";

const ServicePage = () => {
  return (
    <div
      className="section_home mt-node flex flex-col justify-center"
      id="gia-tri-mang-lai"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1 } }}
        viewport={{ once: true }}
      >
        <SectionHeading text="CÂU LẠC BỘ MANG ĐẾN?" className="mt-0" />
      </motion.div>
      {/* <div className="flex w-full gap-20 max-sm:flex-col">
        {services.map((service, index) => (
          <SectionService
            key={index + 1}
            content={service.content}
            imageProps={service.imageProps}
            index={index}
          />
        ))}
      </div> */}

      <div className="flex w-full flex-wrap justify-center gap-node max-xs:flex-col max-xs:gap-14 max-xs:items-center">
        {services.map((service, index) => (
          <CardService key={index + 1} data={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
