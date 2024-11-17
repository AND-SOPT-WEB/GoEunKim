import { useEffect, useState, useRef } from 'react';
import { getMyHobby, getOthersHobby } from '../apis/user';

const useHobby = () => {
  const userNo = useRef<HTMLInputElement>(null);
  const [meg, setMeg] = useState<string>('');
  const [myHobby, setMyHobby] = useState<string>('');

  useEffect(() => {
    const getHobby = async () => {
      const res = await getMyHobby();
      if (res.hobby) {
        setMyHobby(res.hobby);
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
          setMeg('일치하는 회원번호가 없습니다 🫥');
          alert('일치하는 회원번호가 없습니다 🫥');
          break;
        default:
          setMeg(`${no}번 회원의 취미는 바로바로 🥸 ${res?.hobby}`);
      }
    }
  };

  return { userNo, meg, myHobby, handleSubmitClick };
};

export default useHobby;
