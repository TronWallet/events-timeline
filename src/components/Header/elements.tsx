import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'
import ds from '../../styles/designSystem'

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  @media (max-width: ${ds.sizes.lg}) {
    max-width: 100%;
    padding-left: 0;
    padding-right: 0;
  }
`;

export const HeaderFix = styled.div`
  &.fix-height {
    padding-top: 65px;
  }
`;

interface HeaderProps {
  position?: string,
  bgColor?: string,
  float?: number
};

export const HeaderContainer = styled.header`
  height: 68px;
  position: ${(props: HeaderProps) => props.position};
  background-color: ${ds.colors.gunMetal};
  width: 100%;
  z-index: ${(props: HeaderProps) => (props.float ? 101 : 99)};
  transition: all 0.3s linear;
  ${(props: HeaderProps) => props.float &&
    css`
      top: ${props.float - props.float};
    `};
`;

export const Title = styled.h2`
  color: ${ds.colors.white};
  &:hover {
    color: ${ds.colors.whiteSmoke};
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${ds.sizes.lg}) {
    display: block;
    padding: 20px;
  }
`;

export const ConfigMenu = styled.div`
  & > ul {
    display: flex;
    height: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  & > ul > li {
    height: 100%;
    margin-left: 20px;
    margin-right: 0;
    align-self: center;
    @media (max-width: 375px) {
      margin-left: 10px;
    }
  }
  & > ul > li > div {
    left: auto;
    right: 0;
    min-width: 0;
  }
`;

export const NavHeader = styled.nav`
  display: flex;
  width: 100%;
  .navbar-brand {
    width: 500px;
    align-self: center;
    @media (max-width: ${ds.sizes.xl}) {
      width: 500px;
    }
    @media (max-width: ${ds.sizes.lg}) {
      position: absolute;
      left: 16px;
      top: 0;
      z-index: 99;
    }
  }
  @media (max-width: ${ds.sizes.lg}) {
    display: block;
  }
`;

export const NavbarCollapse = styled.div`
  width: calc(100% - 180px);
  padding-left: 50px;
  display: flex;
  justify-content: space-between;
  & > section {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-self: center;
    position: relative;
    @media (max-width: ${ds.sizes.md}) {
      align-self: flex-start;
    }
  }
  & > section:not(.justify-content-end) {
    height: 100%;
  }
  @media (max-width: ${ds.sizes.xl}) {
    width: calc(100% - 140px);
    padding-left: 40px;
  }
  @media (max-width: ${ds.sizes.lg}) {
    width: 100%;
    padding-left: 0px;
    flex-direction: column-reverse;
    & > section.justify-content-end {
      height: 100%;
      align-items: center;
      padding-right: 75px;
      height: 65px;
      @media (max-width: 375px) {
        padding-right: 65px;
      }
    }
    & > section:not(.justify-content-end) {
      display: none;
      height: auto;
      background: #25253a;
      &.opened {
        display: block;
      }
      @media (max-width: ${ds.sizes.xl}) {
        align-self: flex-end;
        justify-content: flex-end;
      }
      @media (max-width: ${ds.sizes.lg}) {
        &.opened {
          display: block;
        }
        flex-direction: column-reverse;
      }
    }
  }
`;

export const NavbarToggle = styled.button`
  height: 40px;
  line-height: 38px;
  text-align: center;
  width: 40px;
  padding: 0px;
  border: 1px solid ${ds.colors.blueGray};
  background: ${ds.colors.blueGray};
  color: ${ds.colors.white};
  font-size: 24px;
  border-radius: 4px;
  position: absolute;
  top: 13px;
  right: 16px;
  cursor: pointer;
  z-index: 99;
  display: none;
  outline: none;
  &:hover {
    border: 1px solid ${ds.colors.blueGray};
    background: ${ds.colors.blueGray};
  }
  @media (max-width: ${ds.sizes.lg}) {
    display: block;
  }
`;

export const NavListItem = styled.li`
  margin-right: 20px;
  position: relative;
  &:hover > div,
  &:focus > div,
  &:focus-within > div {
    visibility: visible;
    opacity: 1;
    z-index: 99;
    transform: translateY(0%);
    transition-delay: 0s, 0s, 0.3s; /* this removes the transition delay so the menu will be visible while the other styles transition */
  }
  @media (max-width: ${ds.sizes.xl}) {
    margin-right: 0px;
    margin-left: 20px;
  }
  @media (max-width: ${ds.sizes.lg}) {
    margin-left: 0px;
  }
  &:hover > a {
    color: ${ds.colors.manatee};
  }
  &.active > a:after,
  &:hover > a:after {
    opacity: 1;
    @media (max-width: ${ds.sizes.lg}) {
      display: none;
    }
  }
  &.active > a:after {
    @media (max-width: ${ds.sizes.lg}) {
      display: block;
    }
  }
`;

export const DropToggleSettings = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-size: ${ds.fontSizes.menu};
  font-weight: 400;
  color: ${ds.colors.white};
  height: 100%;
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  position: relative;
  i {
    color: ${ds.colors.blueGray};
    font-size: ${ds.fontSizes.xLarge};
  }
  i.icon-arrow-down {
    font-size: ${ds.fontSizes.small};
    margin-left: 4px;
  }
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 0px;
    bottom: 0px;
    right: 0px;
    width: 100%;
    height: 3px;
    background-image: linear-gradient(132deg, #ee3f71, #7d3ff1);
    opacity: 0;
    transition: all 0.25s linear;
  }
  @media (max-width: ${ds.sizes.lg}) {
    display: block;
  }
`;

export const DropMenuSettings = styled.div`
  position: absolute;
  left: 0px;
  top: 100%;
  min-width: 240px;
  background: #25253a;
  padding: 30px 25px;
  box-shadow: 0 0 25px rgba(152, 60, 233, 0.65);
  visibility: hidden;
  opacity: 0;
  transform: translateY(-0.5em);
  z-index: 1;
  transition: all 0.3s ease-in-out 0s, visibility 0s linear 0.3s, z-index 0s linear 0.01s;
  @media (max-width: ${ds.sizes.xl}) {
    left: auto;
    right: 0px;
  }
  a {
    display: block;
    margin-bottom: 16px;
  }
  a:last-child {
    margin-bottom: 0px;
  }
`;

export const MenuItemLink = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: ${ds.fontSizes.menu};
  font-weight: 400;
  color: ${ds.colors.white};
  margin-right: 20px;
  width: max-content;
  &:hover {
    color: ${ds.colors.manatee};
  }
  @media (max-width: ${ds.sizes.lg}) {
    display: block;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

export const SubMenuHeaderContainer = styled.div`
  background-color: #222;
`;