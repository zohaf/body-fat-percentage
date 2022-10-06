import FormWrapper from "./formWrapper";

type UserData = {
  firstName: string;
  lastName: string;
  age: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export function UserForm({
  firstName,
  lastName,
  age,
  updateFields,
}: UserFormProps) {
  return (
    <FormWrapper title="personal details">
      <label>Firstname</label>
      <input
        title="Firstname"
        autoFocus
        required
        type="text"
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />
      <label>Lastname</label>
      <input
        title="Lastname"
        required
        type="text"
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />
      <label>Age</label>
      <input
        title="Age"
        required
        type="number"
        min={1}
        value={age}
        onChange={(e) => updateFields({ age: e.target.value })}
      />
    </FormWrapper>
  );
}
