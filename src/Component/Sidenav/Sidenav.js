import React from "react";
import "./sidenav.css";
export default function Sidenav(props) {
  return (
    <div
      className="sidenav"
      style={{ width: props.toggle == true ? "100%" : "0" }}
    >
      <ul>
        <li>Home</li>
        <li>Items</li>
        <li>About us</li>
      </ul>
    </div>
  );
}
