import styled from '@emotion/styled';

const Select = ({ setLevel, time, level }) => {
  const handleChange = (e) => {
    setLevel(e.target.value);
  };
  return (
    <>
      <SelectBox name="level" onChange={handleChange} value={level}>
        <option value="1">Level1 🥸</option>
        <option value="2"> Level 2 🙄 </option>
        <option value="3"> Level 3 🥵</option>
      </SelectBox>
      <Timer>{time.toFixed(2)}</Timer>
    </>
  );
};

export default Select;

const SelectBox = styled.select`
  padding: 0.5rem 1.5rem;
  border-radius: 0.3rem;
  font-family: 'STUNNING-Bd';
  color: ${({ theme }) => theme.colors.grey};
`;

const Timer = styled.h2`
  width: 5rem;
  text-align: right;
`;
