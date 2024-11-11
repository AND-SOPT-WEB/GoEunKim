import { useState } from 'react';
import { postSignup } from '../apis/user';
import isPwdValide from '../utils/isPwdValide';
import { useNavigate } from 'react-router-dom';

const useSignup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<'이름' | '비밀번호' | '취미' | '등록성공'>('이름');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [checkpassword, setCheckpassword] = useState<string>('');
  const [hobby, setHobby] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [isPwdVisible, setIsPwdVisible] = useState<boolean>(false);

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
    const res = await postSignup({ username: name.trim(), password, hobby });
    console.log(res);

    if (res === '00') {
      alert('회원이름이 중복되었습니다 😢 다시 입력해주세요!');
      setStep('이름');
      setName('');
      setPassword('');
      setCheckpassword('');
    } else {
      alert('환영합니다! 회원가입 성공 🏰🔥');
      setStep('등록성공');
      navigate('/');
    }
  };

  return {
    step,
    setStep,
    name,
    setName,
    password,
    setPassword,
    checkpassword,
    setCheckpassword,
    hobby,
    setHobby,
    passwordError,
    setPasswordError,
    isPwdVisible,
    setIsPwdVisible,
    handleNamechange,
    handlepasswordchange,
    handlehobbychange,
    handlecheckpwdchange,
    handlevisiblechange,
    handleSingupClick,
  };
};

export default useSignup;
