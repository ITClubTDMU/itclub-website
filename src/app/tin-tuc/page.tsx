"use client";

import React, { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import CardNews from "@/components/card/card-news";
import SectionHeading from "@/components/section/heading";

const News = () => {
  const [data_len, setDataLen] = useState(8);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry);
          entry.target.classList.add("animate-fadeIn");
        }
      });
    });
    const targets = document.querySelectorAll(".new_hidden");
    if (targets) targets.forEach((target) => observer.observe(target));
    return () => {
      if (targets) targets.forEach((target) => observer.unobserve(target));
    };
  }, [data_len]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry.target);
          setDataLen(data_len + 8);
        }
      });
    });
    const target = document.getElementById("end_observe");
    if (target) observer.observe(target);
    return () => {
      if (target) observer.unobserve(target);
    };
  }, [data_len]);

  return (
    <div className="] mx-auto max-w-[1200px] pb-40">
      <SectionHeading text="Tin tức" />
      <div id="priority-news" className="grid grid-cols-2 gap-node">
        <CardNews size="lg" />
        <div className="not-important-news grid grid-cols-2 gap-node">
          <CardNews size="md" />
          <CardNews size="md" />
          <CardNews size="md" />
          <CardNews size="md" />
        </div>
      </div>

      <div className="list mt-node grid grid-cols-4 gap-node">
        {Array.from({ length: data_len }).map((_, index) => (
          <CardNews
            key={index + 1}
            id={index === data_len - 1 ? "end_observe" : "observe" + index}
            className={cn({
              "new_hidden opacity-0": data_len > 8 && index >= data_len - 8,
            })}
          />
        ))}
      </div>
    </div>
  );
};

export default News;
