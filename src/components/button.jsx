import React from "react";

function Button(props) {
  //   return <button className={props.class}>{props.children}</button>;
  //   return (
  //     <button style={{ backgroundColor: "red", color: "white" }}>
  //       {props.children}
  //     </button>
  //   );
  return <button style={props.style}>{props.children}</button>;
}

export default Button;
