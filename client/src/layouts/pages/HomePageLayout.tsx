import styled from 'styled-components';
import PostLayout from '../containers/PostLayout';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { setSearchPosts } from '@/slices/postSlice';
import { BiSearchAlt2 } from 'react-icons/bi';

const HomePageLayoutStyled = styled.div`
  margin-top: 2rem;
`;

const InputSearchStyled = styled.div`
  position: relative;
  max-width: 30rem;
  svg {
    display: inline-block;
    right: 5px;
    top: 50%;
    transform: translate(0, -50%);
    width: 2.4rem;
    height: 2.4rem;
    position: absolute;
    cursor: pointer;
    transition: all 0.3s;
    opacity: 0.7;
    &:hover {
      scale: 1.06;
      opacity: 1;
    }
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 5px 1rem;
  font-size: 1.4rem;
  font-weight: 500;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`;

export default function HomePageLayout() {
  const dispatch = useDispatch();
  const [keySearch, setKeySearch] = useState<string>('');

  const handleChangeKeySearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeySearch(e.target.value);
  };

  const handleSearch = () => {
    dispatch(setSearchPosts(keySearch));
  };
  return (
    <HomePageLayoutStyled>
      <InputSearchStyled>
        <Input
          placeholder='Enter title post'
          value={keySearch}
          onChange={handleChangeKeySearch}
        />
        <BiSearchAlt2 onClick={handleSearch} />
      </InputSearchStyled>
      <PostLayout />
    </HomePageLayoutStyled>
  );
}
