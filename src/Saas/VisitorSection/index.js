import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import ImageOne from '../../../assets/saas/saasvisitor1.png';
import ImageBg from '../../../assets/saas/visitor_bg.png';
import {
  Box,
  Button,
  Card,
  Container,
  FeatureBlock,
  Heading,
  Image,
  Text,
} from '../../components';

import VisitorSectionWrapper, {
  SectionObject,
} from './visitor.style';

const VisitorSection = ({
  title,
  description,
  textArea,
  imageWrapper,
  btnStyle,
}) => (
  <VisitorSectionWrapper id="visitorSection">
    <SectionObject>
      <Card className="objectWrapper" {...imageWrapper}>
        <Zoom>
          <Image src={ImageBg} alt="BgImage" />
        </Zoom>
        <Card className="dashboardWrapper" {...imageWrapper}>
          <Fade left>
            <Image src={ImageOne} alt="VisitorDashboard1" />
          </Fade>
        </Card>
      </Card>
    </SectionObject>
    <Container>
      <Box {...textArea}>
        <FeatureBlock
          title={
            <Heading
              content="Expand your business with custom branding"
              {...title}
            />
          }
          description={
            <Text
              content="Your brand is your business. Represent it well with a bomb website, clean graphics, and a fresh logo that leaves a lasting impression."
              {...description}
            />
          }
          button={
            <Link href="#">
              <a>
                <Button title="HOW IT WORKS" {...btnStyle} />
              </a>
            </Link>
          }
        />
      </Box>
    </Container>
  </VisitorSectionWrapper>
);

VisitorSection.propTypes = {
  title: PropTypes.object,
  description: PropTypes.object,
  btnStyle: PropTypes.object,
  textArea: PropTypes.object,
  imageWrapper: PropTypes.object,
};

VisitorSection.defaultProps = {
  textArea: {
    width: ['100%', '100%', '45%'],
    ml: [0, 0, '58%'],
  },
  imageWrapper: {
    boxShadow: 'none',
  },
  title: {
    fontSize: ['20px', '26px', '26px', '36px', '48px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px'],
    lineHeight: '1.5',
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '33px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px'],
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
  },
};

export default VisitorSection;
