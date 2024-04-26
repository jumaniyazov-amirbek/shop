import React from "react";
import HeadingLogo from "../../assets/images/HeadingLogo.png";
export default function Heading() {
  return (
    <div className="Heading-all">
      <div className="continer">
        <div className="Heading-block">
          <div className="Heading-logo">
            <img src={HeadingLogo} alt="" />
          </div>
          <div className="Heading-sorche">
            <input placeholder="Search query..." type="text" />
            <button>Search</button>
          </div>
          <div className="Heading-link">
            <a href="#">HOME</a>
            <a href="#">CATEGORIES</a>
            <a href="#">CONTACT</a>
          </div>
        </div>
      </div>
    </div>
  );
}