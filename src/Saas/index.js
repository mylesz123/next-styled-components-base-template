import React from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { saasTheme } from '../theme/saas';
import { ResetCSS } from '../../styles/reset';
import { GlobalStyle, ContentWrapper } from './saas.style';
// https://9elements.com/ inspiration
import Navbar from './Navbar';
import BannerSection from './BannerSection';
import FeatureSection from './FeatureSection';
import VisitorSection from './VisitorSection';
import ServiceSection from './ServiceSection';
import Footer from './Footer';
import PricingSection from './PricingSection';
import TrialSection from './TrialSection';
import TimelineSection from './TimelineSection';
import TestimonialSection from './TestimonialSection';
import PartnerSection from './PartnerSection';
import { DrawerProvider } from '../contexts/DrawerContext';
import FaqSection from './FaqSection';
import Lava from './Lava';

const Saas = () => (
  <ThemeProvider theme={saasTheme}>
    <>
      <Head>
        <title>Saas | A react next landing page</title>
        <meta name="Description" content="React next landing page" />
        <meta name="theme-color" content="#ec5555" />
        {/* Load google fonts */}
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
          rel="stylesheet"
        />
      </Head>
      <ResetCSS />
      <GlobalStyle />
      <ContentWrapper>
        <Lava />
        <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
          <DrawerProvider>
            <Navbar />
          </DrawerProvider>
        </Sticky>
        <BannerSection />
        <FeatureSection />
        <VisitorSection />
        {/* <ServiceSection /> */}
        {/* <PricingSection /> */}
        {/* <TestimonialSection /> */}
        {/* <PartnerSection /> */}
        <TimelineSection />
        {/* <FaqSection /> */}
        <TrialSection />
        <Footer />
      </ContentWrapper>
    </>
  </ThemeProvider>
);

export default Saas;
