import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const CurveIcon = styled.div`
  svg {
    fill: ${themeGet('colors.lightBorder', '#f1f4f6')};
  }
`;

const BannerWrapper = styled.section`
  padding-top: 210px;
  padding-bottom: 160px;
  background-color: ${themeGet('colors.lightBorder', '#f1f4f6')};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  @media (max-width: 990px) {
    padding-top: 180px;
    padding-bottom: 60px;
    min-height: auto;
  }
  @media (max-width: 767px) {
    padding-top: 130px;
    padding-bottom: 20px;
    min-height: auto;
  }

  .particle {
    position: absolute;
    overflow: hidden;
  }

  .row {
    position: relative;
    z-index: 1;
  }

  .button__wrapper {
    margin-top: 40px;
    @media (max-width: 767px) {
      margin-bottom: 30px;
    }
    .reusecore__button {
      &.outlined {
        border-color: rgba(82, 104, 219, 0.2);
      }
    }
  }
`;

const BannerObject = styled.div`
  /* position: fixed; */
  position: absolute;
  width: 50%;
  height: 100%;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  @media (max-width: 767px) {
    width: 75%;
  }
  .objectWrapper {
    margin-left: auto;
    /* position: absolute; */
    position: relative;
    .dashboardWrapper {
      position: absolute;
      top: 0;
      right: 0;
      .chatObject {
        position: absolute;
        top: 20px;
        left: 120px;
      }
    }
  }
`;

const DiscountLabel = styled.div`
  display: inline-block;
  border-radius: 4em;
  border: 1px solid ${themeGet('colors.lightBorder', '#f1f4f6')};
  padding: 7px 25px;
  box-shadow: 0px 7px 25px 0px rgba(22, 53, 76, 0.05);
  margin-bottom: 30px;
  background-color: ${themeGet('colors.white', '#ffffff')};
  @media (max-width: 767px) {
    padding: 7px 15px;
  }
`;

export { DiscountLabel, BannerObject };

export default BannerWrapper;
