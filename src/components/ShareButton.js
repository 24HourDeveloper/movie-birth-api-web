import React from "react";

export default function ShareButton({ label, handleClick, social }) {
  return (
    <button
      onClick={handleClick}
      data-sharer={social}
      data-title="Try this web app that shows movies based on your birth month and year."
      data-url="https://blissful-beaver-33cf0d.netlify.com/"
      style={{
        borderRadius: 4,
        fontWeight: 500,
        color: "#fff",
        background: "#3f51b5",
        padding: 10,
        marginTop: 10,
        width: 180,
        borderStyle: "solid",
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
      }}
    >
      {label.toUpperCase()}
    </button>
  );
}
