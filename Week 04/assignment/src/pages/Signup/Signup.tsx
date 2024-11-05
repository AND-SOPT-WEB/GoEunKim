import SignupForm from '../../components/SignupForm/SignupForm';
import { useState } from 'react';
import { Wrapper } from '../Login/Login.style';
import { Title, Footer } from './Signup.style';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [step, setStep] = useState<'이름' | '비밀번호' | '취미' | '등록성공'>('이름');
  return (
    <Wrapper>
      <Title>회원가입</Title>
      {step == '이름' && <SignupForm label="이름" description="이름을 입력하세요" onNext={() => setStep('비밀번호')} />}
      {step == '비밀번호' && (
        <SignupForm label="비밀번호" description="비밀번호를 입력하세요" onNext={() => setStep('취미')} />
      )}
      {step == '취미' && <SignupForm label="취미" description="취미를 입력하세요" onNext={() => setStep('등록성공')} />}
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
