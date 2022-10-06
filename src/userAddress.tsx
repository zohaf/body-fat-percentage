import FormWrapper from "./formWrapper";

type UserAddressData = {
  address: string;
  city: string;
  country: string;
};

type UserAddressProps = UserAddressData & {
  updateFields: (fields: Partial<UserAddressData>) => void;
};

export function UserAddress({
  address,
  city,
  country,
  updateFields,
}: UserAddressProps) {
  return (
    <FormWrapper title="Address">
      <label>Street Address</label>
      <input
        title="address"
        autoFocus
        required
        type="text"
        value={address}
        onChange={(e) => updateFields({ address: e.target.value })}
      />
      <label>City</label>
      <input
        title="city"
        required
        type="text"
        value={city}
        onChange={(e) => updateFields({ city: e.target.value })}
      />
      <label>Country</label>
      <input
        title="country"
        required
        type="text"
        value={country}
        onChange={(e) => {
          updateFields({ country: e.target.value });
        }}
      />
    </FormWrapper>
  );
}
