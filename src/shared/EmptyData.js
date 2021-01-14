import React from "react";
import { Empty } from "antd";
export default function EmptyData() {
  return (
    <Empty
      className="mt-5"
      description={
        <>
          <div className="h2">No Data Found</div>
          <p>Please choose different search keyword or filters</p>
        </>
      }
    />
  );
}
