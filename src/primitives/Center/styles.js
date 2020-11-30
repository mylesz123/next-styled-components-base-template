import styled, { css } from 'styled-components';

const CenterWrapper = styled.div`
  min-width: auto;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* conditionally rendered styles */
  ${({ totallyCentered }) =>
    totallyCentered &&
    css`
      min-height: inherit;
      justify-content: center;
    `}
`;

export default CenterWrapper;
