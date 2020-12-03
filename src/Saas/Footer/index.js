import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import LogoImage from '../../../assets/rc/rc-logo.png';
import { FooterData } from '../../data/Saas';
import {
  Box,
  Container,
  Heading,
  Logo,
  Text,
} from '../../components';

import FooterWrapper, {
  List,
  ListItem,
  CurvIcon,
} from './footer.style';

const Curv = () => (
  <CurvIcon>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fillOpacity="1"
        d="M0,32L34.3,42.7C68.6,53,137,75,206,112C274.3,149,343,203,411,218.7C480,235,549,213,617,186.7C685.7,160,754,128,823,144C891.4,160,960,224,1029,256C1097.1,288,1166,288,1234,256C1302.9,224,1371,160,1406,128L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
      />
    </svg>
  </CurvIcon>
);

const Footer = ({
  row,
  col,
  colOne,
  colTwo,
  titleStyle,
  logoStyle,
  textStyle,
}) => (
  <>
    <Curv />

    <FooterWrapper>
      <Container className="footer_container">
        <Box className="row" {...row}>
          <Box {...colOne}>
            <Logo
              href="#"
              logoSrc={LogoImage}
              title="Hosting"
              logoStyle={logoStyle}
            />
            <Text content="hello@redq.io" {...textStyle} />
            <Text content="+479-443-9334" {...textStyle} />
          </Box>

          <Box {...colTwo}>
            {FooterData.map((widget, index) => (
              <Box
                className="col"
                {...col}
                key={`footer-widget-${index}`}
              >
                <Heading content={widget.title} {...titleStyle} />
                <List>
                  {widget.menuItems.map((item, i) => (
                    <ListItem key={`footer-list-item-${i}`}>
                      <Link href={item.url}>
                        <a className="ListItem">{item.text}</a>
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </FooterWrapper>
  </>
);

// Footer style props
Footer.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  colOne: PropTypes.object,
  colTwo: PropTypes.object,
  titleStyle: PropTypes.object,
  textStyle: PropTypes.object,
  logoStyle: PropTypes.object,
};

// Footer default style
Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // Footer col one style
  colOne: {
    width: [1, '35%', '35%', '23%'],
    mt: [0, '13px'],
    mb: ['30px', 0],
    pl: ['15px', 0],
    pr: ['15px', '15px', 0],
  },
  // Footer col two style
  colTwo: {
    width: ['100%', '65%', '65%', '77%'],
    flexBox: true,
    flexWrap: 'wrap',
  },
  // Footer col default style
  col: {
    width: ['100%', '50%', '50%', '25%'],
    pl: '15px',
    pr: '15px',
    mb: '30px',
  },
  // widget title default style
  titleStyle: {
    color: '#343d48',
    fontSize: '16px',
    fontWeight: '700',
    mb: '30px',
  },
  // Default logo size
  logoStyle: {
    width: '100px',
    mb: '15px',
  },
  // widget text default style
  textStyle: {
    color: '#0f2137',
    fontSize: '16px',
    mb: '10px',
  },
};

export default Footer;
