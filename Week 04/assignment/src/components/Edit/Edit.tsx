import { Wrapper, Container, SubTitle } from '../Hobby/Hobby.style';
import useEdit from '../../hooks/useEdit';

const Edit = () => {
  const { pwdRef, hobbyRef, meg, handleSubmitClick } = useEdit();

  return (
    <Wrapper>
      <h1>내 정보 수정하기 🧶</h1>
      <article>
        <Container>
          <SubTitle>새 비밀번호</SubTitle>
          <input type="password" ref={pwdRef}></input>
        </Container>
        <Container>
          <SubTitle>새 취미</SubTitle>
          <input type="text" ref={hobbyRef}></input>
          {meg && <p>{meg}</p>}
          <button onClick={handleSubmitClick}>수정하기</button>
        </Container>
      </article>
    </Wrapper>
  );
};

export default Edit;
