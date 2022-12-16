import loading from "./Hourglass.gif";
import React from "react";

export default function Loading() {
  return (
    <div className="text-center">
      <img src={loading} alt="Loading..." />
    </div>
  );
}
