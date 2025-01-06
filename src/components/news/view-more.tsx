import React from "react";
import Link from "next/link";

const ViewMore = () => {
  return (
    <Link
      href={"/tin-tuc"}
      className="ml-auto mt-node flex w-max justify-end text-md font-medium uppercase text-primary underline hover:underline-offset-2"
    >
      Xem thêm
    </Link>
  );
};

export default ViewMore;
