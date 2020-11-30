import React from 'react';
import PropTypes from 'prop-types';

import CenterWrapper from './styles';

export default function Center({
  className,
  children,
  totallyCentered,
  ...rest
}) {
  return (
    <CenterWrapper {...{ className, totallyCentered, ...rest }}>
      {children}
    </CenterWrapper>
  );
}

Center.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  totallyCentered: PropTypes.bool,
};
