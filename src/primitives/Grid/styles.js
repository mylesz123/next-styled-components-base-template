import styled from 'styled-components';

const GridLayout = styled.div`
  display: grid;
  gap: ${({ gap = 1 }) => `${gap}rem`};

  min-width: ${({ fillAvailableSpace }) =>
    fillAvailableSpace ? '-webkit-fill-available' : 0};

  /* https://every-layout.dev/layouts/grid/ */
  /* minmax(min(300px, 100%), 1fr) */
  @supports (width: min(250px, 100%)) {
    & {
      grid-template-columns: repeat(
        auto-fit,
        minmax(
          min(
            ${({ minColumnWidth }) =>
              minColumnWidth ? `${minColumnWidth}px` : '300px'},
            100%
          ),
          1fr
        )
      );
    }
  }
`;

export default GridLayout;
