import { FaRotate } from "react-icons/fa6";
import styled from "styled-components";
import PropTypes from "prop-types";

const Button = styled.button`
  padding: 1em 2em;
  width: fit-content;
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
    color: white;
    background-color: green;
  }
`;

function QuoteBtn({ getQuote }) {
  return (
    <Button id="new-quote" onClick={getQuote}>
      New quote <FaRotate style={{ marginInlineStart: ".5em" }} />
    </Button>
  );
}

QuoteBtn.propTypes = {
  getQuote: PropTypes.func.isRequired,
};

export default QuoteBtn;
