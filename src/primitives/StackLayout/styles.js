import styled from 'styled-components';

const StackLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & > * {
    margin-bottom: ${({ gap = 0.8 }) => `${gap}rem`} !important;
  }
`;

export default StackLayoutWrapper;
