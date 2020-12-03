import React from 'react';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import RCLogo from '../../../assets/rc/rc-logo.png';
import BannerObject1 from '../../../assets/saas/banner/bannerObject1.png';

import { MENU_ITEMS } from '../../data/Saas';

import BannerWrapper, {
  DiscountLabel,
  BannerObject,
} from './bannerSection.style';

import { MeltingCurve } from '../../svg/index';

import {
  Box,
  Button,
  Container,
  FeatureBlock,
  Heading,
  Image,
  Text,
} from '../../components';

const BannerSection = ({
  imgStyle,
  row,
  col,
  title,
  btnStyle,
  description,
  discountText,
  discountAmount,
}) => (
  <>
    <BannerWrapper id="banner_section">
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <DiscountLabel>
              <Text content="20% Discount" {...discountAmount} />
              <Text content="New Years special!" {...discountText} />
            </DiscountLabel>
            <FeatureBlock
              title={
                <Heading
                  className="gradient-heading"
                  content="Rotten Crayons Creative"
                  {...title}
                />
              }
              description={
                <Text
                  content="A multidisciplinary design agency. Bringing ideas to life, and meeting clients where they are."
                  {...description}
                />
              }
              button={
                <AnchorLink
                  href={MENU_ITEMS[1].path}
                  offset={MENU_ITEMS[1].offset}
                >
                  <Button title="Learn More" {...btnStyle} />
                </AnchorLink>
              }
            />
          </Box>
        </Box>
      </Container>
      <BannerObject>
        <div className="objectWrapper">
          {/* <Image
            src={RCLogo}
            {...imgStyle}
            alt="Rotten Crayons Creative Logo"
          /> */}
          <Image src={BannerObject1} alt="BannerObject1" />
        </div>
      </BannerObject>
    </BannerWrapper>
    <MeltingCurve />
  </>
);

BannerSection.propTypes = {
  title: PropTypes.object,
  btnStyle: PropTypes.object,
  description: PropTypes.object,
  contentStyle: PropTypes.object,
  discountText: PropTypes.object,
  discountAmount: PropTypes.object,
  outlineBtnStyle: PropTypes.object,
};

BannerSection.defaultProps = {
  imgStyle: {
    transform: 'rotate(45deg)',
    opacity: '0.4',
  },
  title: {
    fontSize: ['22px', '34px', '30px', '55px'],
    fontWeight: '700',
    // color: '#eb4d4b', //red
    // color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px'],
    lineHeight: '1.5',
  },
  description: {
    fontSize: '16px',
    color: '#fff',
    // color: '#343d48cc',
    lineHeight: '1.75',
    mb: '0',
  },
  btnStyle: {
    minWidth: ['120px', '120px', '120px', '156px'],
    fontSize: ['13px', '14px'],
    fontWeight: '500',
    colors: 'primaryWithBg',
  },
  outlineBtnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#5167db',
    ml: '18px',
  },
  discountAmount: {
    fontSize: '14px',
    color: '#eb4d4b',
    mb: 0,
    as: 'span',
    mr: '0.4em',
    fontWeight: 700,
  },
  discountText: {
    fontSize: ['13px', '14px'],
    color: '#0f2137',
    mb: 0,
    as: 'span',
    fontWeight: 500,
  },
};

export default BannerSection;
