import styled from 'styled-components';
import ds from '../../styles/designSystem';

export const FooterDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-top: 75px;
  padding-bottom: 25px;
  min-height: 99px;
  background-color: ${ds.colors.gunMetal};
`;

export const Container = styled.div`
  position: relative;
  bottom: 0;
  width: 100%;
`;

export const Content = styled.div`
  &.copyright {
    padding-top: 50px;
    text-align: center;
    color: ${ds.colors.white};
    font-weight: 300;
    font-size: ${ds.fontSizes.large};
  }
  &.copyright a {
    color: ${ds.colors.white};
    &:hover {
      color: ${ds.colors.whiteSmoke};
    }
  }
`;

export const Menu = styled.div``;

export const MenuTitle = styled.h5`
  text-transform: uppercase;
  letter-spacing: 0.3em;
  font-weight: 400;
  margin-bottom: 24px;
  font-size: ${ds.fontSizes.regular};
  color: ${ds.colors.white};
`;

export const MenuList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const MenuListItem = styled.li`
  display: flex;
  font-weight: 300;
  font-size: ${ds.fontSizes.xLarge};
  margin-bottom: 10px;
  a {
    color: ${ds.colors.white};
    text-decoration: none;
  }
  a:hover {
    color: ${ds.colors.whiteSmoke};
  }
  @media (max-width: 768px) {
    display: block;
    text-align: center;
  }
`;

export const Logo = styled.img`
  max-width: 80px;
  height: auto;
  object-fit: contain;
  &:hover {
    opacity: 0.75;
  }
  @media (max-width: 375px) {
    max-width: 80px;
  }
`;