import React from 'react';
import PropTypes from 'prop-types';
import { Fade, Slide } from 'react-reveal';

import { Timeline } from '../../data/Saas';
import {
  Box,
  Container,
  Heading,
  Image,
  Text,
} from '../../components';

import {
  TimelineWrapper,
  TimelineItem,
  TimelineContent,
  TimelineDot,
  Hidden,
} from './timeline.style';

import { Grid } from '../../primitives';
import Creativity from '../../../assets/saas/illustration.png';

const TimelineSection = ({
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  indexStyle,
  timelineTitle,
  timelineDescription,
}) => (
  <TimelineWrapper id="timeline">
    <Container>
      <Box {...sectionHeader}>
        <Text {...sectionSubTitle} content="Creative Process" />
        <Heading
          {...sectionTitle}
          content="How Rotten Crayons works behind the scenes"
        />
      </Box>
      <Grid className="grid">
        <aside className="content">
          {Timeline.map((item, index) => (
            <TimelineItem key={`timeline-item-${index}`}>
              <div>
                <Hidden>
                  <Slide bottom>
                    <Text
                      as="span"
                      content={item.index || `0${index + 1}`}
                      {...indexStyle}
                    />
                  </Slide>
                </Hidden>
              </div>
              <TimelineContent>
                <Hidden>
                  <Slide bottom delay={100}>
                    <Heading
                      as="h2"
                      content={item.title}
                      {...timelineTitle}
                    />
                  </Slide>
                </Hidden>
                <Hidden>
                  <Slide bottom delay={200}>
                    <Text
                      content={item.description}
                      {...timelineDescription}
                    />
                  </Slide>
                </Hidden>
              </TimelineContent>
              <TimelineDot />
            </TimelineItem>
          ))}
        </aside>
        <aside className="imageSection">
          <Fade bottom>
            <Image src={Creativity} alt="Creativity" />
            {/* TODO: mention this in the footer with special thanks to author */}
            {/* <ImageCredit>
              <a href="https://stories.freepik.com/idea">
                Illustration by Freepik Stories
              </a>
            </ImageCredit> */}
          </Fade>
        </aside>
      </Grid>
    </Container>
  </TimelineWrapper>
);

TimelineSection.propTypes = {
  sectionWrapper: PropTypes.object,
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  button: PropTypes.object,
  textArea: PropTypes.object,
  imageArea: PropTypes.object,
  imageTwo: PropTypes.object,
  buttonWrapper: PropTypes.object,
  indexStyle: PropTypes.object,
  timelineTitle: PropTypes.object,
  timelineDescription: PropTypes.object,
};

TimelineSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['60px', '80px', '80px', '80px'],
    pb: ['60px', '80px', '80px', '80px'],
  }, // section header default style
  sectionHeader: {
    mb: '56px',
  },
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#5268db',
    mb: '10px',
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  imageAreaRow: {
    flexDirection: 'row-reverse',
  },
  col: {
    pr: '15px',
    pl: '15px',
  },
  textArea: {
    width: ['100%', '100%', '55%', '50%', '55%'],
    mb: ['40px', '40px', '0', '0', '0'],
  },
  imageArea: {
    width: ['100%', '100%', '45%', '50%', '45%'],
    mb: ['30px', '40px', '40px', '0', '0'],
  },
  title: {
    fontSize: ['30px', '38px', '38px', '48px', '48px'],
    fontWeight: '300',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: '15px',
  },
  description: {
    fontSize: '16px',
    color: 'textColor',
    lineHeight: '1.75',
    mb: '33px',
  },
  buttonWrapper: {
    mt: ['25px', '50px'],
    flexBox: true,
    justifyContent: 'center',
  },
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
    height: '46px',
  },
  imageOne: {
    mb: '40px',
    ml: 'auto',
    mr: 'auto',
  },
  imageTwo: {
    ml: 'auto',
    mr: 'auto',
  },
  indexStyle: {
    fontSize: ['36px', '42px', '52px', '56px', '72px'],
    fontWeight: '300',
    color: '#eaebec',
    display: 'block',
    lineHeight: '1',
    mb: '0',
  },
  timelineTitle: {
    fontSize: ['16px', '17px', '18px', '18px', '20px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '13px',
  },
  timelineDescription: {
    fontSize: ['14px', '15px', '15px', '15px', '16px'],
    lineHeight: '2',
    color: '#5d646d',
    mb: '0',
  },
};

export default TimelineSection;
