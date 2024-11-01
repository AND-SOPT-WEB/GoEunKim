import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import logo from '../../assets/logo.svg';

const Modal = ({ date, level, time, closeModal }) => {
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
        <Info>
          <p>{date}</p>
          <p>{`🎰 Level  : ${level}`}</p>
          <p>{`⏰ TIME : ${formattedTime}`}</p>
        </Info>
        <CloseButton onClick={closeModal}> 다시 해볼래요 ☝🏻 </CloseButton>
      </ModalContent>
    </Wrapper>,
    document.getElementById('root')
  );
};

export default Modal;

const Wrapper = styled.dialog`
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #000000bd;
  color: black;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  text-align: center;

  gap: 2.3rem;
  width: 40%;
  height: 60%;

  & h1 {
    font-family: 'STUNNING-Bd';
    color: black;
    font-size: 1.3rem;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;

  & p {
    font-family: 'S-CoreDream-3Light';
    font-size: 1rem;
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

// :nth-child() 보다 :nth-of-type() 이게 더 안전하다고 함
const Logo = styled.img`
  width: 50px;
  animation: ${bounce} 1.5s infinite;
  &:nth-of-type(2) {
    animation-delay: 0.3s;
  }
  &:nth-of-type(3) {
    animation-delay: 0.6s;
  }
`;

const CloseButton = styled.button`
  background-color: ${({ theme }) => theme.colors.midBlue};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkBlue};
  }
`;
