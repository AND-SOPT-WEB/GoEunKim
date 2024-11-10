import { NavLink, useNavigate } from 'react-router-dom';
import { HeaderWrapper } from './Header.style';
import { Title } from '../../pages/Login/Login.style';

const Header = () => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    localStorage.removeItem('token');
    navigate('/');
  };
  return (
    <>
      <HeaderWrapper>
        <section>
          <Title>마이페이지</Title>
          <nav>
            <li>
              <NavLink to="/mypage">취미</NavLink>
            </li>
            <li>
              <NavLink to="/mypage/edit">프로필 수정</NavLink>
            </li>
          </nav>
        </section>
        <section>
          <button onClick={handleLogoutClick}>로그아웃</button>
        </section>
      </HeaderWrapper>
    </>
  );
};

export default Header;
