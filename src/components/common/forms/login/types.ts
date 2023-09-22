export type LoginFormProps = {
  onSubmit: (values: LoginInputs) => void;
};

export type LoginInputs = {
  email: string;
  password: string;
};
