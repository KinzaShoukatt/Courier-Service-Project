import React from "react";
import { useState } from "react";

import { Container, LeftDiv, RightDiv, Main } from "./style";

import SideNav from "../../sideNav";
import Header from "../../header";

const MainLayout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <>
      <Container>
        <LeftDiv className={sidebarOpen ? "open" : ""}>
          <SideNav toggleSidebar={toggleSidebar} />
        </LeftDiv>

        <RightDiv>
          <Header toggleSidebar={toggleSidebar}/>
          <Main>
            <div>{children}</div>
          </Main>
        </RightDiv>

      </Container>
    </>
  );
};

export default MainLayout;
