import { Outlet } from 'react-router';
import styled from 'styled-components';
import HeaderLayout from '@/components/Header';

const PublicLayoutStyled = styled.div``;

const Main = styled.main`
  padding-bottom: 1.5rem;
`;

const Container = styled.div`
  position: relative;
  margin: 8rem auto 0;
  max-width: 120rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export default function PublicLayout() {
  return (
    <PublicLayoutStyled>
      <HeaderLayout />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </PublicLayoutStyled>
  );
}
