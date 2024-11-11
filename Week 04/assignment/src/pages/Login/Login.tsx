import { Link, useNavigate } from 'react-router-dom';
import { Wrapper, Title } from './Login.style';
import { Form, Input } from '../../components/SignupForm/Form.style';
import { useRef, useState } from 'react';
import postLogin from '../../apis/user/postLogin';

const Login = () => {
  const navigate = useNavigate();
  const idRef = useRef<HTMLInputElement | null>(null);
  const pwdRef = useRef<HTMLInputElement | null>(null);
  const [errmeg, setErrmeg] = useState<string>('');

  const handleClick = async () => {
    if (!idRef.current?.value || !pwdRef.current?.value) {
      setErrmeg('아이디와 비밀번호를 모두 입력해주세요!');
      return;
    }

    const prop = { username: idRef.current.value, password: pwdRef.current.value };
    const res = await postLogin(prop);
    switch (res) {
      case '01':
        setErrmeg('비밀번호가 일치하지 않습니다.');
        break;
      case '02':
        setErrmeg('아이디가 일치하지 않습니다.');
        break;
      default:
        setErrmeg('');
        localStorage.setItem('token', res);
        navigate('/mypage');
    }
  };
  return (
    <Wrapper>
      <Title>로그인</Title>
      <Form className="login">
        <Input ref={idRef} placeholder="아이디"></Input>
        <Input ref={pwdRef} placeholder="비밀번호"></Input>
        {errmeg != '' && <span>{errmeg}</span>}
        <button onClick={handleClick}>로그인</button>
        <Link to="/signup">
          <p>회원가입</p>
        </Link>
      </Form>
    </Wrapper>
  );
};

export default Login;
