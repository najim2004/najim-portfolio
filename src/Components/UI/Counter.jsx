"use client";
import React from "react";
import CountUp from "react-countup";

const Counter = ({ end, duration = 2, prefix = "", suffix = "" }) => {
  return (
    <div className="text-center">
      <CountUp end={end} duration={duration} prefix={prefix} suffix={suffix} />
    </div>
  );
};

export default Counter;
