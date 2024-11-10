import { Wrapper, Container, SubTitle, Info } from './hobby.style';

const Hobby = () => {
  return (
    <Wrapper>
      <h1>취미 🧶</h1>
      <article>
        <Container>
          <SubTitle>나의취미 👋</SubTitle>
          <Info>독서</Info>
        </Container>
        <Container>
          <SubTitle>다른 사람들의 취미 🤔</SubTitle>
          <input></input>
          <button>검색하기</button>
          <Info>독서</Info>
        </Container>
      </article>
    </Wrapper>
  );
};

export default Hobby;
