import React from 'react';
import PropTypes from 'prop-types';

import GridLayout from './styles';

export default function Grid({
  children,
  className,
  fillAvailableSpace = false,
  gap,
  minColumnWidth,
  ...rest
}) {
  return (
    <GridLayout
      {...{
        fillAvailableSpace,
        gap,
        className,
        minColumnWidth,
        ...rest,
      }}
    >
      {children}
    </GridLayout>
  );
}

Grid.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fillAvailableSpace: PropTypes.bool,
  gap: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7]),
  minColumnWidth: PropTypes.number,
};
