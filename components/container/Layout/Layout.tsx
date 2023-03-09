import { Header } from "@components/presentational";
import styled from "styled-components";

const Container = styled.div``;

const Contents = styled.main``;

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <Container>
        <Contents>{children}</Contents>
      </Container>
    </>
  );
};

export default Layout;
