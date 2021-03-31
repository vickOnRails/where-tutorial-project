import React from "react";
import { Nav, Footer } from "./";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Nav />
      </header>

      <main className="main">
        <div className="container">{children}</div>
      </main>

      <Footer />
    </>
  );
};

export { Layout };
