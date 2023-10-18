import React from "react";

const Container = (props) => {
  return (
    <div
      className={`container p-32 mx-auto xl:px-0 ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
  );
}

export default Container;