import { Outlet, useLocation } from "react-router";

// import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import styled from "styled-components";
import Footer from "./Footer";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  /* overflow-x: hidden; */
  /* overflow-x set to hidden somehow brought about some scrolling
   behavior issues, as well as forcing a scroll up on page refresh  */
`;

const Main = styled.main`
  /* overflow: scroll; */
`;

function AppLayout() {
  // const location = useLocation();
  // console.log(location);
  return (
    <StyledAppLayout>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </StyledAppLayout>
  );
}

export default AppLayout;
