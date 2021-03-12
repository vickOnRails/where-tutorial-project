import React from "react";
import { Nav, Footer, Search } from "./";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <Search />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
};

export { Layout };
