import styled from "styled-components";
import Heading from "./Heading";
import Body from "./Body";
import Divider from "../images/pattern-divider-desktop.svg";
import StyledDiceButton from "./DiceButton";

function QuoteContainer({ slip, onClickCallback, className }) {
  return (
    <div className={className}>
      <Heading>ADVICE #{slip.id}</Heading>
      <Body>{slip.advice}</Body>
      <img src={Divider} />
      <StyledDiceButton onClickCallback={onClickCallback} />
    </div>
  );
}

const StyledQuoteContainer = styled(QuoteContainer)`
  background: #313a48;
  box-shadow: 30px 50px 80px rgba(0, 0, 0, 0.100202);
  border-radius: 15px;
  max-width: 540px;
  padding: 10%;
  margin: 10% auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  position: relative;
`;

export default StyledQuoteContainer;
