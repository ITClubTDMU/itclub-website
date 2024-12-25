import React from "react";

import CardNews from "@/components/card/card-news";
import SectionHeading from "@/components/section/heading";

const News = () => {
  return (
    <section className="wrapper section_home mx-auto mt-node px-extraPageHorizontal max-xs:h-auto max-xs:py-20">
      <SectionHeading text="Tin tức" />
      <div className="max-md:grid-cols-1 grid grid-cols-2 gap-node max-xs:grid-cols-1">
        <CardNews size="lg" id="priority-news" />
        <div className="not-important-news max-sm:grid-cols-1 grid grid-cols-2 gap-node">
          <CardNews size="md" />
          <CardNews size="md" />
          <CardNews size="md" />
          <CardNews size="md" />
        </div>
      </div>
    </section>
  );
};

export default News;
