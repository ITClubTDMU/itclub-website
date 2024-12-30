import React from "react";
import Link from "next/link";

const ViewMore = () => {
  return (
    <Link
      href={"/tin-tuc"}
      className="ml-auto mt-node w-max flex justify-end text-md font-medium uppercase text-primary hover:underline hover:underline-offset-2"
    >
      Xem thêm
    </Link>
  );
};

export default ViewMore;
