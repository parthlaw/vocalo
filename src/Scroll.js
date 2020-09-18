import React from "react";

const Scroll = (prop) => {
  return (
    <div
      style={{
        width: "100%",
        overflowY: "scroll",
        height: "600px",
      }}
    >
      {prop.children}
    </div>
  );
};
export default Scroll;
