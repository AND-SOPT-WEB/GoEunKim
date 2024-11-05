import { Input, Form } from '../../pages/Login/Login.style';
import { Label } from './SignupForm.style';

type Info = {
  label: string;
  description: string;
  onNext: () => void; // 함수
};

// React.Fc  (함수형 컴포넌트의 약자)
// <Info>는 전달 받는 props의 타입을 지정해줌
const SignupForm: React.FC<Info> = ({ label, description, onNext }) => {
  return (
    <Form>
      <Label>{label}</Label>
      <Input placeholder={description}></Input>
      <button onClick={onNext}>다음</button>
    </Form>
  );
};

export default SignupForm;
