import React from "react";

import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SectionHeading from "@/components/section/heading";

import MemberCardBOD from "./member-card-bod";
import members from "./members";

const CarouselMember_BOD = () => {
  return (
    <div className="mx-auto max-w-[1200px]">
      <SectionHeading text="Ban chủ nhiệm" />

      <div className="flex flex-col items-center">
        <MemberCardBOD member={members[0]} />

        <Carousel className="w-full max-w-[80%]">
          <CarouselContent className="justify-center max-xs:flex-col">
            {members.slice(1, 3).map((member, index) => (
              <CarouselItem
                key={index + 1}
                className={cn(
                  "!p-0 text-center xs:basis-1/2 sm:basis-1/3 max-xs:basis-full",
                  {
                    "ml-0": index === 0,
                  }
                )}
              >
                <MemberCardBOD member={member} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* <div className="flex mx-auto w-full max-w-[80%]  max-xs:flex-col flex-wrap justify-center">
          <div className=""></div>
          <MemberCardBOD member={members[1]} className=" max-xs:basis-full xs:basis-1/2 sm:basis-1/3" />
          <MemberCardBOD member={members[2]} className="max-xs:basis-full xs:basis-1/2 sm:basis-1/3" />
        </div> */}

        <Carousel className="w-full max-w-[80%] max-sm:w-full">
          <CarouselContent className="-ml-4">
            {members.slice(3).map((member, index) => (
              <CarouselItem
                key={index + 1}
                className={cn("pl-4 sm:basis-1/3 max-sm:basis-full", {
                  "ml-0": index === 0,
                })}
              >
                <MemberCardBOD member={member} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselMember_BOD;
