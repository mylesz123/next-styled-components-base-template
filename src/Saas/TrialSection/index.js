import React from 'react';
import PropTypes from 'prop-types';
import { Fade } from 'react-reveal';
import Serious from '../../../assets/rc/urban-208.png';
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Text,
} from '../../components';

import { ButtonGroup } from '../saas.style';

import { Grid, StackLayout } from '../../primitives';

const TrialSection = ({
  sectionWrapper,
  title,
  description,
  btnStyle,
}) => (
  <Box {...sectionWrapper} id="contact">
    <Container>
      <Grid>
        <Fade left>
          <Image src={Serious} alt="VisitorDashboard1" />
          {/* https://icons8.com/illustrations/style--urban */}
          {/* <p>
          Illustration by{' '}
          <a href="https://icons8.com/illustrations/author/5d99891e7dca3d0016cd4e34">
            Julia
          </a>{' '}
          from <a href="https://icons8.com/">Icons8</a>
        </p> */}
        </Fade>
        <StackLayout>
          <Heading
            {...title}
            content="Get serious about your business today."
          />
          <Text
            {...description}
            content="Lets make some magic together, the Rotten Crayons way ✌🏽"
          />
          <ButtonGroup className="button_group">
            <Button title="Let's go" {...btnStyle} />
          </ButtonGroup>
        </StackLayout>
      </Grid>
    </Container>
  </Box>
);

TrialSection.propTypes = {
  sectionWrapper: PropTypes.object,
  row: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  imageArea: PropTypes.object,
  ImageOne: PropTypes.object,
};

TrialSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    className: 'trial-section',
    pt: ['20px', '40px', '60px', '80px'],
    pb: ['0px', '0px', '0px', '80px'],
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
  },
  imageArea: {
    width: ['100%', '100%', '43%'],
    mb: ['35px', '35px', '40px', '40px'],
    flexBox: true,
    justifyContent: 'center',
  },
  title: {
    fontSize: ['32px', '32px', '36px', '42px', '48px'],
    fontWeight: '400',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: '28px',
    textAlign: 'center',
    lineHeight: '1.25',
  },
  description: {
    fontSize: ['15px', '15px', '16px', '16px', '16px'],
    color: 'textColor',
    lineHeight: '2.1',
    textAlign: 'center',
    mb: ['35px', '35px', '40px', '60px'],
  },
  ImageOne: {
    ml: 'auto',
    mr: 'auto',
  },
};

export default TrialSection;
