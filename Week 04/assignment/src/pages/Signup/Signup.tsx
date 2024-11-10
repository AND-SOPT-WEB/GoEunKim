import SignupForm from '../../components/SignupForm/SignupForm';
import { useState, useRef } from 'react';
import { Wrapper } from '../Login/Login.style';
import { Title, Footer } from './Signup.style';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [step, setStep] = useState<'이름' | '비밀번호' | '취미' | '등록성공'>('이름');

  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [hobby, setHobby] = useState<string>('');

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
          onNext={() => setStep('취미')}
          value={password}
          onChange={handlepasswordchange}
          isDisabled={password.length > 7}
          errmeg="비밀번호는 8자 이하로 입력해주세요"
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
