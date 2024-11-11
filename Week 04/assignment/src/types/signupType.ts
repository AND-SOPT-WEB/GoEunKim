type InputProps = {
  type?: string;
  description: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type PasswordProps = {
  checkpassword?: string;
  oncheckpwdChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  passwordError?: string;
  isPwdVisible?: boolean;
  handlevisiblechange?: () => void;
};

type ButtonProps = {
  label: string;
  value: string;
  checkpassword?: string;
  isDisabled: boolean;
  onNext: () => void;
  handleSingupClick?: () => void;
};

type StatusProps = {
  errmeg: string;
  passwordError?: string;
};

export type Info = InputProps &
  PasswordProps &
  ButtonProps &
  StatusProps & {
    label: string;
    descriptionforCheck?: string;
  };
