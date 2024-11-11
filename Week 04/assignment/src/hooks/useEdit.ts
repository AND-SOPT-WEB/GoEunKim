import { useRef, useState } from 'react';
import { putEdit } from '../apis/user';

const useEdit = () => {
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

  return {
    pwdRef,
    hobbyRef,
    meg,
    setMeg,
    handleSubmitClick,
  };
};

export default useEdit;
