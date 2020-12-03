import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../Text';
import Link from '../../Link';
// must use "width" and "height" properties or "layout='fill'" property
import Image from '../../Image';

const Logo = ({
  logoWrapperStyle,
  logoStyle,
  titleStyle,
  withAnchor,
  anchorProps,
  logoSrc,
  title,
  ...props
}) => (
  <Link {...props} {...logoWrapperStyle}>
    {withAnchor ? (
      <a {...anchorProps}>
        {logoSrc ? (
          <Image
            src={logoSrc}
            alt={title}
            layout="fill"
            {...logoStyle}
          />
        ) : (
          <Text content={title} {...titleStyle} />
        )}
      </a>
    ) : (
      <>
        {logoSrc ? (
          <Image
            src={logoSrc}
            alt={title}
            layout="fill"
            {...logoStyle}
          />
        ) : (
          <Text content={title} {...titleStyle} />
        )}
      </>
    )}
  </Link>
);

Logo.propTypes = {
  logoSrc: PropTypes.string,
  title: PropTypes.string.isRequired,
  logoWrapperStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  withAnchor: PropTypes.bool,
  anchorProps: PropTypes.object,
};

Logo.defaultProps = {
  logoWrapperStyle: {
    display: 'inline-block',
    mr: '1rem',
    'a:hover,a:focus': {
      textDecoration: 'none',
    },
  },
  titleStyle: {
    display: 'inline-block',
    fontSize: '2rem',
    lineHeight: 'inherit',
    whiteSpace: 'nowrap',
  },
};
export default Logo;
