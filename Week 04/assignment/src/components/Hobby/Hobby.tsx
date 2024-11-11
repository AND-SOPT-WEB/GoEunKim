import { useEffect, useRef, useState } from 'react';
import { Wrapper, Container, SubTitle, Info } from './Hobby.style';
import { getMyHobby, getOthersHobby } from '../../apis/user';

const Hobby = () => {
  const userNo = useRef<HTMLInputElement>(null);
  const [meg, setmeg] = useState<string>('');
  const [myhobby, setMyhobby] = useState<string>('');

  useEffect(() => {
    const getHobby = async () => {
      const res = await getMyHobby();
      if (res.hobby) {
        setMyhobby(res.hobby);
      }
    };
    getHobby();
  }, []);

  const handleSubmitClick = async () => {
    if (userNo.current?.value) {
      const no = userNo.current?.value;
      const res = await getOthersHobby(no);
      switch (res) {
        case '01':
          setmeg('일치하는 회원번호가 없습니다');
          break;
        default:
          setmeg(`${no}번 회원의 취미는 바로바로 🥸 ${res?.hobby}`);
      }
    }
  };
  return (
    <Wrapper>
      <h1>취미 🧶</h1>
      <article>
        <Container>
          <SubTitle>나의취미 👋</SubTitle>
          {myhobby && <Info>{myhobby}</Info>}
        </Container>
        <Container>
          <SubTitle>다른 사람들의 취미 🤔</SubTitle>
          <input ref={userNo} placeholder="사용자 번호를 입력하세요" />
          <button onClick={handleSubmitClick}>검색하기</button>
          {meg && <Info>{meg}</Info>}
        </Container>
      </article>
    </Wrapper>
  );
};

export default Hobby;
