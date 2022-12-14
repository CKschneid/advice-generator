import styled from "styled-components";

const DiceButton = ({ onClickCallback, className }) => {
  return (
    <div className={className} onClick={onClickCallback}>
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
          fill="#202733"
        />
      </svg>
    </div>
  );
};

const StyledDiceButton = styled(DiceButton)`
  background: #53ffaa;
  box-shadow: 0px 4px 4px 0px #00000040;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  position: absolute;
  left: 45%;
  bottom: -24px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 40px #53ffaa;
  }
`;

export default StyledDiceButton;
