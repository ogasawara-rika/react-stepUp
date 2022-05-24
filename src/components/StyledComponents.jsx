import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <SContainer>
      <Stitle>- styled components -</Stitle>
      <button>FIGHT</button>
    </SContainer>
  );
};

const SContainer = styled.div`
  border: solid 2px #392eff;
  border-radius: 8px;
`;
const Stitle = styled.p`
  color: green;
`;
