import SideBar from "../UI/SideBar";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
const ContentContainer=styled.div`
padding-left: 50px;
width: calc(100vw - 220px );

`
function MainLayout() {
  return (
    <div style={{ display: 'flex' }}>
      <SideBar />
      <ContentContainer >
        <Outlet /> {/* Nested routes will render here */}
      </ContentContainer>
    </div>
  )
}

export default MainLayout
