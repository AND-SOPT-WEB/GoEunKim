import { useRef, useState } from 'react';
import { Wrapper, Container, SubTitle } from '../Hobby/Hobby.style';
import putEdit from '../../apis/user/putEdit';

const Edit = () => {
  const pwdRef = useRef<HTMLInputElement | null>(null);
  const hobbyRef = useRef<HTMLInputElement | null>(null);
  const [meg, setMeg] = useState<string>('');

  const handleSubmitClick = async () => {
    const password = pwdRef.current?.value.trim() || '';
    const hobby = hobbyRef.current?.value.trim() || '';

    if (password || hobby) {
      const payload: { password?: string; hobby?: string } = {};
      if (password) payload.password = password;
      if (hobby) payload.hobby = hobby;

      const res = await putEdit(payload);
      console.log(res);
      switch (res) {
        case '00':
          setMeg('회원정보 수정에 실패했습니다 😢');
          break;
        default:
          setMeg('수정이 완료되었습니다 👀');
          break;
      }
    } else {
      setMeg('비밀번호 또는 취미 중 하나를 입력해주세요');
    }
  };

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
