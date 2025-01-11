const AddressInputs = ({ addressProps, setAddressProp, disabled = false }) => {
  const { phone, streetAddress, postalCode, city, country } = addressProps;
  return (
    <>
      <label>Phone Number</label>
      <input
        disabled={disabled}
        type="tel"
        placeholder="Phone Number"
        value={phone || ''}
        className="placeholder:text-white"
        onChange={(ev) => setAddressProp('phone', ev.target.value)}
      />
      <label>Country</label>
      <input
        disabled={disabled}
        type="text"
        placeholder="Country"
        value={country || ''}
        className="placeholder:text-white"
        onChange={(ev) => setAddressProp('country', ev.target.value)}
      />
      <div className="flex gap-2 grid grid-cols-2">
        <div>
          <label>Postal Code</label>
          <input
            disabled={disabled}
            type="text"
            className="placeholder:text-white"
            placeholder="Postal Code"
            value={postalCode || ''}
            onChange={(ev) => setAddressProp('postalCode', ev.target.value)}
          />
        </div>
        <div>
          <label>City</label>
          <input
            disabled={disabled}
            type="text"
            className="placeholder:text-white"
            placeholder="City"
            value={city || ''}
            onChange={(ev) => setAddressProp('city', ev.target.value)}
          />
        </div>
      </div>
      <label>Street Address</label>
      <input
        disabled={disabled}
        type="text"
        placeholder="Street Address"
        className="placeholder:text-white"
        value={streetAddress || ''}
        onChange={(ev) => setAddressProp('streetAddress', ev.target.value)}
      />
    </>
  );
};
export default AddressInputs;
