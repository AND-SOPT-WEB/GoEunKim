import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import logo from '../../assets/logo.svg';

const Modal = ({ date, level, time }) => {
  const formattedTime = time.toFixed(2);
  return ReactDOM.createPortal(
    <Wrapper>
      <ModalContent>
        <Logos>
          <Logo src={logo} />
          <Logo src={logo} />
          <Logo src={logo} />
        </Logos>
        <h1>😳 오호 좀 하시는데요 ~~ 🏆</h1>
        <div>
          <p>{date}</p>
          <p>{`Level 🎰 : ${level}`}</p>
          <p>{`TIME ⏰: ${formattedTime}`}</p>
        </div>
      </ModalContent>
    </Wrapper>,
    document.getElementById('root')
  );
};

export default Modal;

const Wrapper = styled.dialog`
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #000000bd;
  color: white;
  box-sizing: none;
  color: black;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  text-align: center;

  gap: 4rem;
  width: 40%;
  height: 60%;

  & h1 {
    color: black;
    font-size: 1.5rem;
  }

  & p {
  fon
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

const Logos = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const Logo = styled.img`
  width: 50px;
  animation: ${bounce} 1.5s infinite;
  &:nth-child(2) {
    animation-delay: 0.3s;
  }
  &:nth-child(3) {
    animation-delay: 0.6s;
  }
`;
