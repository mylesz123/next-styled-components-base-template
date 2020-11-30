import React from 'react';
import PropTypes from 'prop-types';

import FlexLayoutWrapper from './styles';

const FlexLayout = ({ children, className, ...rest }) => (
  <FlexLayoutWrapper {...{ className, ...rest }}>
    {children}
  </FlexLayoutWrapper>
);

FlexLayout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default FlexLayout;
