import styled from 'styled-components';
import { ImBlogger2 } from 'react-icons/im';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PATH_CONSTANT } from '@/constants';

const HeaderStyled = styled.div`
  width: 100%;
  background-color: var(--color-primary);
  top: 0;
  left: 0;
  position: fixed;
  z-index: 10;
`;

const Container = styled.div`
  width: 120rem;
  margin: 0 auto;
  height: 8rem;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BoxLogo = styled(Link)`
  svg {
    width: 4rem;
    height: 4rem;
    color: var(--color-white);
  }
`;
const PageName = styled.div`
  padding: 1rem 3rem;
  background-color: var(--color-white);
  border-radius: 1rem;
  font-size: 2.4rem;
  font-weight: 600;
`;

const InfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-white);
  gap: 5xp;

  .user-name {
    font-size: 1.6rem;
  }

  svg {
    width: 2.8rem;
    height: 2.4rem;
  }
`;

export default function Header() {
  return (
    <HeaderStyled>
      <Container>
        <BoxLogo to={PATH_CONSTANT.home}>
          <ImBlogger2 />
        </BoxLogo>
        <PageName>Info</PageName>
        <InfoUser>
          <FaUser />
          <p className='user-name'>Hải Sơn</p>
        </InfoUser>
      </Container>
    </HeaderStyled>
  );
}
