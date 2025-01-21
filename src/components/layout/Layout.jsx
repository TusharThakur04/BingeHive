import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { PageWrapper } from "../../styles/global/default";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <PageWrapper>
      <Header />
      <main
        style={{
          minHeight: "100vh",
        }}
      >
        <Outlet />
      </main>

      <Footer />
    </PageWrapper>
  );
};

export default Layout;
