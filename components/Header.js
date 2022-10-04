import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <p>Header</p>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: lightblue;
  height: 4rem;
`;
