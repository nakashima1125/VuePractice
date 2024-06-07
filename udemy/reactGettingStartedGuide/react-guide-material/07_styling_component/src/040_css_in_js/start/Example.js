import { useState } from "react";
import styled from "styled-components";

console.dir(styled);
const StyledButton = styled.button`
  margin: 10px auto;
  border-radius: 9999px;
  border: none;
  display: block;
  width: 120px;
  height: 60px;
  font-weight: bold;

  cursor: pointer;
  background-color: ${({ isSelected }) => (isSelected ? `pink` : ``)};
`;

const OrangeButton = styled(StyledButton)`
  background-color: orange;
  :hover,
  :active {
    color: red;
    opacity: 0.7;
    transform: scale(1.1);
    transition: all 0.3s ease-out 0s;
    @media (max-width: 600px) {
      border-radius: 0;
    }
  }
`;

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
      <StyledButton isSelected={isSelected} onClick={clickHandler}>
        ボタン
      </StyledButton>
      <OrangeButton isSelected={isSelected} onClick={clickHandler}>
        ボタン
      </OrangeButton>
      <div style={{ textAlign: "center" }}>
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};

export default Example;
