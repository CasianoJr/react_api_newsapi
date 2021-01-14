import React from "react";
import { Spin } from "antd";
export default function Loading() {
  return (
    <div className="text-center">
      <Spin size="large" className="mx-auto mt-5" />
    </div>
  );
}
