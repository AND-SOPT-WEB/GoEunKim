import { Label, SubmitBtn, Input, Form, InputWrapper } from './Form.style';

type Info = {
  label: string;
  type?: string;
  description: string;
  descriptionforCheck?: string;
  onNext: () => void; // 함수
  value: string;
  checkpassword?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  oncheckpwdChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isDisabled: boolean;
  errmeg: string;
  handleSingupClick?: () => void;
  passwordError?: string;
  handlevisiblechange?: () => void;
  isPwdVisible?: boolean;
};

// React.Fc  (함수형 컴포넌트의 약자)
// <Info>는 전달 받는 props의 타입을 지정해줌
const SignupForm: React.FC<Info> = ({
  label = '이름',
  type = 'text',
  description,
  descriptionforCheck,
  onNext,
  value,
  checkpassword,
  onChange,
  oncheckpwdChange,
  isDisabled,
  errmeg,
  handleSingupClick,
  passwordError,
  handlevisiblechange,
  isPwdVisible,
}) => {
  let submitButton;

  switch (label) {
    case '이름':
      submitButton = (
        <SubmitBtn disabled={value.length === 0 || isDisabled} onClick={onNext}>
          다음
        </SubmitBtn>
      );
      break;

    case '비밀번호':
      submitButton = (
        <SubmitBtn
          disabled={checkpassword?.length === 0 || value.length === 0 || isDisabled || passwordError !== ''}
          onClick={onNext}
        >
          다음
        </SubmitBtn>
      );
      break;

    case '취미':
      submitButton = (
        <SubmitBtn disabled={value.length === 0 || isDisabled} onClick={handleSingupClick}>
          회원가입 완료
        </SubmitBtn>
      );
      break;
  }
  return (
    <Form>
      <Label>{label}</Label>
      {label === '비밀번호' ? (
        <>
          <InputWrapper>
            <Input
              type={isPwdVisible ? 'text' : 'password'}
              isDisabled={isDisabled}
              placeholder={description}
              value={value}
              onChange={onChange}
            />
            <button onClick={handlevisiblechange}>
              {isPwdVisible ? <i className="fa-regular fa-eye-slash"></i> : <i className="fa-regular fa-eye"></i>}
            </button>
          </InputWrapper>
          <Input
            type="password"
            isDisabled={isDisabled}
            placeholder={descriptionforCheck}
            value={checkpassword}
            onChange={oncheckpwdChange}
          />
          {passwordError && <span>{passwordError}</span>}
        </>
      ) : (
        <Input type={type} isDisabled={isDisabled} placeholder={description} value={value} onChange={onChange} />
      )}
      {isDisabled && <span>{errmeg}</span>}
      {submitButton}
    </Form>
  );
};

export default SignupForm;
