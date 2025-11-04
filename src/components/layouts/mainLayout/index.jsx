import React, { useEffect, useRef } from "react";
import { useState } from "react";

import { Container, LeftDiv, RightDiv, Main } from "./style";

import SideNav from "../../sideNav";
import Header from "../../header";

const MainLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        window.innerWidth <= 768
      ) {
        setSidebarOpen(false);
      }
    };

    if (sidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen]);
  return (
    <>
      <Container>
        <LeftDiv className={sidebarOpen ? "open" : ""}>
          <SideNav toggleSidebar={toggleSidebar} />
        </LeftDiv>

        <RightDiv>
          <Header toggleSidebar={toggleSidebar} />
          <Main>
            <div>{children}</div>
          </Main>
        </RightDiv>
        {sidebarOpen && window.innerWidth <= 768 && (
          <div
            onClick={() => setSidebarOpen(false)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              zIndex: 500,
            }}
          />
        )}
      </Container>
    </>
  );
};

export default MainLayout;
