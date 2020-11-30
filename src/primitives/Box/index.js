import React from 'react';
import PropTypes from 'prop-types';

import BoxWrapper from './styles';
import { BOX_SIZES } from '../constants';

export default function Box({ className, children, size = 'small' }) {
  return <BoxWrapper {...{ size, className }}>{children}</BoxWrapper>;
}

Box.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.PropTypes.oneOf(Object.values(BOX_SIZES)),
};
