"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";

const NestedA = () => {
  const [active, setActive] = useState(1);

  // console.log("NestedA", active);

  return (
    <div>
      <Button onClick={() => setActive(active + 1)}>Nested A</Button>
    </div>
  );
};

export default NestedA;
