import React from "react";

import CardNews from "@/components/card/card-news";
import SectionHeading from "@/components/section/heading";

import ViewMore from "./view-more";

const News = () => {
  return (
    <section
      className="wrapper section_home mx-auto mt-node px-extraPageHorizontal max-xs:h-auto max-xs:py-20"
      id="tin-tuc"
    >
      <SectionHeading text="Tin tức" />
      <div className="grid grid-cols-2 gap-node max-xs:grid-cols-1 max-md:grid-cols-1">
        <CardNews size="lg" id="priority-news" />
        <div className="not-important-news grid grid-cols-2 gap-node max-sm:grid-cols-1">
          <CardNews size="md" />
          <CardNews size="md" />
          <CardNews size="md" />
          <CardNews size="md" />
        </div>
      </div>

      <ViewMore />
    </section>
  );
};

export default News;
