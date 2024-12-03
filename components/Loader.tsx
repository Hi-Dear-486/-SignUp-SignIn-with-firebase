// components/Loader.tsx
"use client";
import React from "react";
import Image from "next/image";

const Loader = () => {
  return (
    <div>
      <Image
        src="/assests/images/loader.gif"
        alt="Loading..."
        height={50}
        width={50}
      />
    </div>
  );
};

export default Loader;
