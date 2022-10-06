import FormWrapper from "./formWrapper";

type UserAccountData = {
  email: string;
  password: string;
};

type UserAccountProps = UserAccountData & {
  updateFields: (fields: Partial<UserAccountData>) => void;
};

export function UserAccount({
  email,
  password,
  updateFields,
}: UserAccountProps) {
  return (
    <FormWrapper title="user email">
      <label>Email</label>
      <input
        title="Email"
        autoFocus
        required
        type="email"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <label>Password</label>
      <input
        title="Password"
        required
        type="password"
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      />
    </FormWrapper>
  );
}
