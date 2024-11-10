import { Label, SubmitBtn, Input, Form } from './Form.style';

type Info = {
  label: string;
  description: string;
  onNext: () => void; // 함수
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isDisabled: boolean;
  errmeg: string;
};

// React.Fc  (함수형 컴포넌트의 약자)
// <Info>는 전달 받는 props의 타입을 지정해줌
const SignupForm: React.FC<Info> = ({ label, description, onNext, value, onChange, isDisabled, errmeg }) => {
  return (
    <Form>
      <Label>{label}</Label>
      <Input isDisabled={isDisabled} placeholder={description} value={value} onChange={onChange}></Input>
      {isDisabled && <span>{errmeg}</span>}
      <SubmitBtn disabled={value.length === 0 || isDisabled} onClick={onNext}>
        다음
      </SubmitBtn>
    </Form>
  );
};

export default SignupForm;
