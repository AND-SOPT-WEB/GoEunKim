import { Link } from 'react-router-dom';
import { Wrapper, Title, Form, Input } from './Login.style';

const Login = () => {
  return (
    <Wrapper>
      <Title>로그인</Title>
      <Form className="login">
        <Input placeholder="아이디"></Input>
        <Input placeholder="비밀번호"></Input>
        <button>로그인</button>
        <Link to="/signup">
          <p>회원가입</p>
        </Link>
      </Form>
    </Wrapper>
  );
};

export default Login;
