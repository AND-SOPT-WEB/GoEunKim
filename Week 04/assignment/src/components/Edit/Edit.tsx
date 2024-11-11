import { Wrapper, Container, SubTitle } from '../Hobby/Hobby.style';

const Edit = () => {
  return (
    <Wrapper>
      <h1>내 정보 수정하기 🧶</h1>
      <article>
        <Container>
          <SubTitle>새 비밀번호</SubTitle>
          <input></input>
        </Container>
        <Container>
          <SubTitle>새 취미</SubTitle>
          <input></input>
          <button>수정하기</button>
        </Container>
      </article>
    </Wrapper>
  );
};

export default Edit;
