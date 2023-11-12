import { Outlet } from "react-router";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  overflow-x: hidden;
`;

const Main = styled.main`
  overflow: scroll;
`;

const Container = styled.div`
  /* display: flex;
  flex-direction: column; */
  max-width: 120rem;
  margin: 0 auto;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
      <CartOverview />
    </StyledAppLayout>
  );
}

export default AppLayout;
