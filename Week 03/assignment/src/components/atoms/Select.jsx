import styled from '@emotion/styled';

const Select = ({ setLevel }) => {
  const handleChange = (e) => {
    setLevel(e.target.value);
  };
  return (
    <>
      <SelectBox name="level" onChange={handleChange}>
        <option value="1">Level1 🥸</option>
        <option value="2"> Level 2 🙄 </option>
        <option value="3"> Level 3 🥵</option>
      </SelectBox>
      <h2>0</h2>
    </>
  );
};

export default Select;

const SelectBox = styled.select`
  padding: 0.5rem 1.5rem;
  border-radius: 0.3rem;
`;
