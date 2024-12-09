import React from "react";

import CardConnect from "@/components/card/card-connect";

const ConnectPage = () => {
  return (
    <div>
      <div className="grid grid-cols-2 mt-section gap-node mx-auto">
        {Array.from({ length: 10 }).map((_, index) => (
          <CardConnect key={index + 1}  />
        ))}
      </div>
    </div>
  );
};

export default ConnectPage;
