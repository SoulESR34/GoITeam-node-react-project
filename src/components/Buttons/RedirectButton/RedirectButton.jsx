import React from "react";
import { Link } from "react-router-dom";

const styles = {
  redirectContainer: {
    width: "180px",
    height: "45px",
    borderRadius: "50px",
    fontWeight: "bold",
    backgroundColor: "white",
    color: "#FC842D",
    border: "2px solid #FC842D",
    cursor: "pointer",
    textAlign: "center",
    textDecoration: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  hoverStyles: {
    boxShadow: "3px 3px 10px #b85b17",
  },
};

export const RedirectButton = ({ text, route }) => {
  return (
    <Link
      to={route}
      style={{
        ...styles.redirectContainer,
        ...(styles.redirectContainer && styles.redirectContainer.hoverStyles),
      }}
    >
      {text}
    </Link>
  );
};