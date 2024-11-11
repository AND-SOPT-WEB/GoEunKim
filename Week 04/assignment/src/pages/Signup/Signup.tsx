import SignupForm from '../../components/SignupForm/Form';
import useSignup from '../../hooks/useSingup';
import { Wrapper, Title } from '../Login/Login.style';
import { Footer } from './Signup.style';
import { Link } from 'react-router-dom';

const Signup = () => {
  const {
    step,
    setStep,
    name,
    handleNamechange,
    password,
    handlepasswordchange,
    checkpassword,
    handlecheckpwdchange,
    hobby,
    handlehobbychange,
    passwordError,
    isPwdVisible,
    handlevisiblechange,
    handleSingupClick,
  } = useSignup();

  return (
    <Wrapper>
      <Title>회원가입</Title>
      {step == '이름' && (
        <SignupForm
          label="이름"
          description="이름을 입력하세요"
          onNext={() => setStep('비밀번호')}
          value={name}
          onChange={handleNamechange}
          isDisabled={name.length > 7}
          errmeg="이름은 8자 이하로 입력해주세요"
        />
      )}
      {step == '비밀번호' && (
        <SignupForm
          label="비밀번호"
          description="비밀번호를 입력하세요"
          descriptionforCheck="비밀번호 확인"
          onNext={() => setStep('취미')}
          value={password}
          checkpassword={checkpassword}
          onChange={handlepasswordchange}
          oncheckpwdChange={handlecheckpwdchange}
          handlevisiblechange={handlevisiblechange}
          isDisabled={password.length > 7}
          errmeg="비밀번호는 8자 이하로 입력해주세요"
          passwordError={passwordError}
          isPwdVisible={isPwdVisible}
        />
      )}
      {step == '취미' && (
        <SignupForm
          label="취미"
          description="취미를 입력하세요"
          onNext={() => setStep('등록성공')}
          value={hobby}
          onChange={handlehobbychange}
          isDisabled={hobby.length > 7}
          errmeg="취미는 8자 이하로 입력해주세요"
          handleSingupClick={handleSingupClick}
        />
      )}
      <Footer>
        아차차, 이미 회원이신가요?
        <Link to="/">
          <span>로그인하러 가기</span>
        </Link>
      </Footer>
    </Wrapper>
  );
};

export default Signup;
