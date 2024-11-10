import SignupForm from '../../components/SignupForm/Form';
import { useState } from 'react';
import { Wrapper, Title } from '../Login/Login.style';
import { Footer } from './Signup.style';
import { Link, useNavigate } from 'react-router-dom';
import signup from '../../apis/user/signup';
import isPwdValide from '../../utils/isPwdValide';

const Signup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<'이름' | '비밀번호' | '취미' | '등록성공'>('이름');

  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [checkpassword, setCheckpassword] = useState<string>('');
  const [hobby, setHobby] = useState<string>('');

  const [passwordError, setPasswordError] = useState<string>('');
  const [isPwdVisible, setIsPwdVisible] = useState<boolean>(false);

  // <input> 요소에서 발생하는 이벤트 -> React.ChangeEvent<HTMLInputElement>로 지정
  const handleNamechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handlepasswordchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handlehobbychange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHobby(e.target.value);
  };
  const handlecheckpwdchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckpassword(e.target.value);
    if (!isPwdValide(password, e.target.value)) {
      setPasswordError('비밀번호가 일치하지 않습니다.');
    } else {
      setPasswordError('');
    }
  };

  const handlevisiblechange = () => {
    setIsPwdVisible((prev) => !prev);
  };

  const handleSingupClick = async () => {
    try {
      console.log(name, password, hobby);
      const res = await signup({ username: name, password, hobby });
      console.log(res);
      alert('환영합니다! 회원가입 성공 🏰🔥');
      navigate('/');
    } catch (err: any) {
      const errCode = err.response.data.code;
      if (errCode == '00') {
        alert('회원이름이 중복되었습니다 😢 다시 입력해주세요!');
        setStep('이름');
      }
    }
  };

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
