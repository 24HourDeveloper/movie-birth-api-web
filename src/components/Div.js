import React from "react";

export default function Div(props) {
  return (
    <div style={{ width: "100%", textAlign: "center", marginTop: 20 }}>
      {props.children}
    </div>
  );
}
