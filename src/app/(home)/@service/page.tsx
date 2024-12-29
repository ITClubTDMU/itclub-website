import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AppImage from "@/components/ui/app-image";
import SectionHeading from "@/components/section/heading";

const ServicePage = () => {
  return (
    <div className="section_home flex flex-col justify-center" id="gia-tri-mang-lai">
      <SectionHeading text="giá trị mang lại" />
      <div className="grid grid-cols-2 gap-node max-xs:grid-cols-1">
        <Accordion
          type="single"
          collapsible
          className="flex flex-1 flex-col justify-between"
          defaultValue="item-0"
        >
          {Array.from({ length: 4 }).map((_, index) => (
            <AccordionItem
              key={index + 1}
              value={`item-${index}`}
              className="border-b-primary/40"
            >
              <AccordionTrigger>Is it accessible? {index}</AccordionTrigger>
              <AccordionContent>
                <p className="line-clamp-5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores nam impedit fugiat dolor distinctio, ex beatae! Dolor
                  animi, magnam dicta sed non modi sit itaque repellat quaerat
                  amet quasi harum.Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Maiores nam impedit fugiat dolor distinctio,
                  ex beatae! Dolor animi, magnam dicta sed non modi sit itaque
                  repellat quaerat amet quasi harum.Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Maiores nam impedit fugiat dolor
                  distinctio, ex beatae! Dolor animi, magnam dicta sed non modi
                  sit itaque repellat quaerat amet quasi harum.
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <AppImage
          src={"/icpc.jpg"}
          alt="thumbnail ServicePage"
          fill
          ratio={16 / 9}
          className="rounded-2xl"
          container="max-h-max max-xs:hidden"
        />
      </div>
    </div>
  );
};

export default ServicePage;
