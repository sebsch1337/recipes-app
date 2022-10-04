import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <p>Footer</p>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  height: 4rem;
  background-color: lightblue;
`;
