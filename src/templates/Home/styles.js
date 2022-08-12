/* eslint-disable import/prefer-default-export */
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.secondaryBg};
  `}
`;

export default Wrapper;
