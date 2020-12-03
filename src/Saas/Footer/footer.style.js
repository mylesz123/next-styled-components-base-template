import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const CurvIcon = styled.div`
  svg {
    fill: ${themeGet('colors.lightBB', '#f7f8fd')};
  }
`;

const FooterWrapper = styled.footer`
  position: relative;
  overflow: hidden;

  .footer_container {
    background-repeat: no-repeat;
    background-position: center 50px;
    padding-top: 80px;
    padding-bottom: 80px;
    position: relative;
    @media (max-width: 990px) {
      padding-bottom: 20px;
    }
  }
`;

const List = styled.ul``;

const ListItem = styled.li`
  a {
    color: rgba(52, 61, 72, 0.8);
    font-size: 14px;
    line-height: 36px;
    transition: all 0.2s ease;
    &:hover,
    &:focus {
      outline: 0;
      text-decoration: none;
      color: #343d48;
    }
  }
`;

export { List, ListItem };

export default FooterWrapper;
