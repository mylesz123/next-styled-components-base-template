import styled, { css } from 'styled-components';

import { BOX_SIZES } from '../constants';

const borderThin = '0.2rem';

const BoxWrapper = styled.div`
  display: block;
  padding: 0.1rem;
  /* ↓ For high contrast mode */
  outline: ${borderThin} solid transparent;
  outline-offset: calc(${borderThin} * -1);

  & * {
    display: flex;
    flex: auto;
    flex-wrap: wrap;
    overflow-wrap: anywhere;
  }

  /* conditionally rendered styles */
  ${({ size }) =>
    size === BOX_SIZES.SMALL &&
    css`
      padding: 0.1rem;
      margin: 0.4rem;
    `}

  ${({ size }) =>
    size === BOX_SIZES.MEDIUM &&
    css`
      padding: 0.4rem;
      margin: 0.4rem;
    `}

  ${({ size }) =>
    size === BOX_SIZES.LARGE &&
    css`
      padding: 0.8rem;
      margin: 1.4rem;
    `}
`;

export default BoxWrapper;
