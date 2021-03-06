import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { Icon } from 'react-icons-kit';
import { plus } from 'react-icons-kit/entypo/plus';
import { minus } from 'react-icons-kit/entypo/minus';

import { Faq } from '../../data/Saas';
import FaqSectionWrapper from './faqSection.style';

import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  Box,
  Button,
  Container,
  CloseIcon,
  Heading,
  IconWrapper,
  OpenIcon,
  Text,
} from '../../components';

const FaqSection = ({
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  titleStyle,
  descriptionStyle,
  buttonWrapper,
  button,
}) => (
  <FaqSectionWrapper id="faq_section">
    <Container>
      <Box {...sectionHeader}>
        <Text {...sectionSubTitle} />
        <Heading {...sectionTitle} />
      </Box>
      <Box className="row">
        <Accordion>
          <>
            {Faq.map((faqItem, index) => (
              <AccordionItem key={index} expanded={faqItem.expend}>
                <>
                  <AccordionTitle>
                    <>
                      <Heading
                        content={faqItem.title}
                        {...titleStyle}
                      />
                      <IconWrapper>
                        <OpenIcon>
                          <Icon icon={minus} size={18} />
                        </OpenIcon>
                        <CloseIcon>
                          <Icon icon={plus} size={18} />
                        </CloseIcon>
                      </IconWrapper>
                    </>
                  </AccordionTitle>
                  <AccordionBody>
                    <Text
                      content={faqItem.description}
                      {...descriptionStyle}
                    />
                  </AccordionBody>
                </>
              </AccordionItem>
            ))}
          </>
        </Accordion>
        <Box {...buttonWrapper}>
          <Link href="#">
            <a>
              <Button {...button} />
            </a>
          </Link>
        </Box>
      </Box>
    </Container>
  </FaqSectionWrapper>
);

// FaqSection style props
FaqSection.propTypes = {
  descriptionStyle: PropTypes.object,
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  titleStyle: PropTypes.object,
  buttonWrapper: PropTypes.object,
  button: PropTypes.object,
};

// FaqSection default style
FaqSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: '56px',
  },
  // sub section default style
  sectionSubTitle: {
    content: 'FREQUENTLY ASKED QUESTIONS',
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#5268db',
    mb: '5px',
  },
  // section title default style
  sectionTitle: {
    content: 'Want to ask something about us ?',
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
  },
  // accordion title default style
  titleStyle: {
    fontSize: ['16px', '19px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
  },
  // accordion description default style
  descriptionStyle: {
    fontSize: '15px',
    color: '#5d646d',
    lineHeight: '1.75',
    mb: '0',
    fontWeight: '400',
  },
  buttonWrapper: {
    mt: `${11}`,
    flexBox: true,
    justifyContent: 'center',
  },
  button: {
    title: 'EXPLORE FORUM',
    type: 'button',
    fontSize: `${2}`,
    fontWeight: '600',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primary',
    height: `${4}`,
  },
};

export default FaqSection;
