import { Wrapper, Container, SubTitle, Info } from './Hobby.style';
import useHobby from '../../hooks/useHobby';

const Hobby = () => {
  const { userNo, meg, myHobby, handleSubmitClick } = useHobby();
  return (
    <Wrapper>
      <h1>취미 🧶</h1>
      <article>
        <Container>
          <SubTitle>나의취미 👋</SubTitle>
          {myHobby && <Info>{myHobby}</Info>}
        </Container>
        <Container>
          <SubTitle>다른 사람들의 취미 🤔</SubTitle>
          <input type="number" ref={userNo} placeholder="사용자 번호를 입력하세요" />
          <button onClick={handleSubmitClick}>검색하기</button>
          {meg && <Info>{meg}</Info>}
        </Container>
      </article>
    </Wrapper>
  );
};

export default Hobby;
