import React, { Suspense } from "react";

import LatestNews from "@/components/news/latest-news";
import SectionHeading from "@/components/section/heading";

export default function NewsPage() {
  return (
    <section
      className="wrapper section_home mx-auto px-extraPageHorizontal max-xs:h-auto max-xs:py-20"
      id="tin-tuc"
    >
      <SectionHeading text="Tin tức" />
      <Suspense fallback={<div>loading</div>}>
        <LatestNews />
      </Suspense>
      {/* <div>{data?.payload[0].title}</div> */}
      {/* <ViewMore /> */}
    </section>
  );
}
