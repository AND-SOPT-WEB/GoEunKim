import styled from '@emotion/styled';
import { useState } from 'react';

const Card = ({ name, englishName, github }) => {
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <Wrapper>
      <h1>{name}</h1>
      <h2>{englishName}</h2>
      <h3>{github}</h3>

      <LikeCtn>{count}</LikeCtn>
      <button onClick={clickHandler}>좋아요🙂 </button>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  border: 1px solid;
  border-radius: 1rem;
  margin: 1rem 1rem;
  padding: 1rem 3rem;
}`;

const LikeCtn = styled.span`
  font-size: 1rem;
  margin: 2rem;
`;
