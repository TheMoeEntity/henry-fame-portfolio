"use client";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex font-[family-name:var(--font-geist-sans)] justify-center items-center min-h-screen text-[var(--greencal-main)]"
    >
      <div className="flex flex-col justify-center items-center text-center gap-5 md:gap-8 leading-tight text-[var(--ditco-primary)]">
        <h1 className="text-[90px] md:text-[160px] font-bold text-[var(--greencal-primary)]">
          404
        </h1>
        <h1 className="text-5xl md:text-[60px] p-1 font-bold">
          Page Not Found
        </h1>
        <h2 className="text-xl px-3">
          The page or resource you are looking for doesn&#39;t exist or has been
          moved
        </h2>
        <Link
          href={"/"}
          className="border-white border-2 w-fit h-fit text-white px-5 py-3"
        >
          GO BACK HOME
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
