import { FaRotate } from "react-icons/fa6";
import styled from "styled-components";

const Button = styled.button`
  padding: 1em 2em;
  font-weight: bold;
  border: none;
  display: flex;
  text-transform: uppercase;
  aign-items: center;
  justify-content: space-between;
  transition: all 0.3s ease;
  border-radius: 100vmax;
  &:hover {
    cursor: pointer;
    background-color: red;
  }
`;

function QuoteBtn() {
  return (
    <Button id="new-quote">
      New quote <FaRotate />
    </Button>
  );
}

export default QuoteBtn;
