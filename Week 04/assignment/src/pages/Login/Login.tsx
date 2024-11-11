import { Link } from 'react-router-dom';
import { Wrapper, Title } from './Login.style';
import { Form, Input } from '../../components/SignupForm/Form.style';
import useLogin from '../../hooks/useLogin';

const Login = () => {
  const { idRef, pwdRef, errmeg, handleClick } = useLogin();
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
