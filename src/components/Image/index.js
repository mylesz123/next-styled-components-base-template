import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { base, themed } from '../base';

const ImageWrapper = styled('img')(
  {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
  },
  base,
  themed('Image')
);

const Image = ({ src, alt, className, ...props }) => (
  <ImageWrapper {...{ className, src, alt, ...props }} />
);

export default Image;

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  m: PropTypes.number,
};

Image.defaultProps = {
  m: 0,
};
