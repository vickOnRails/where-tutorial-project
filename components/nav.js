import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="container">
        <h1 className="nav__text">
          <Link href="/">Navigate</Link>
        </h1>
      </div>
    </nav>
  );
};

export { Nav };
