import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { Wrapper } from './Mypage.style';

const Mypage = () => {
  return (
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  );
};

export default Mypage;
