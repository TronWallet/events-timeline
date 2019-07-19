import styled from 'styled-components';
import ds from './designSystem';

export const GlobalHeaderContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  @media (max-width: ${ds.sizes.md}) {
    margin-bottom: 24px;
  }
`;

export const GlobalTitle = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: ${ds.colors.blueGray};
  word-break: break-all;
  span {
    font-size: 18px;
    font-weight: 400;
  }
  @media (max-width: ${ds.sizes.lg}) {
    font-size: 22px;
    span {
      font-size: 15px;
      display: block;
    }
  }
  @media (max-width: ${ds.sizes.md}) {
    font-size: 20px;
    span {
      font-size: 14px;
    }
  }
  @media (max-width: ${ds.sizes.sm}) {
    font-size: 18px;
    span {
      font-size: 13px;
    }
  }
`;

export const GlobalIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  margin-right: 14px;
  background-image: ${ds.colors.gradient};
  font-size: 20px;
  color: ${ds.colors.white};
  flex-shrink: 0;
  @media (max-width: ${ds.sizes.sm}) {
    width: 28px;
    height: 28px;
    font-size: 14px;
  }
`;

export const GlobalChartCard = styled.div`
  width: 100%;
  border-radius: 4px;
  background: ${ds.colors.white};
  padding: 0px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  @media (max-width: ${ds.sizes.md}) {
    margin-bottom: 16px;
  }
`;

export const GlobalCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 108px;
  border-radius: 4px;
  background-image: linear-gradient(
    106deg,
    ${ds.colors.pinkCerise},
    ${ds.colors.purpleShiny}
  );
  margin-bottom: 32px;
  @media (max-width: ${ds.sizes.md}) {
    margin-bottom: 16px;
  }
  @media (max-width: ${ds.sizes.sm}) {
    height: 60px;
  }
`;

export const GlobalCardTitle = styled.div`
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.9px;
  text-align: center;
  color: ${ds.colors.white};
  @media (max-width: ${ds.sizes.sm}) {
    font-size: 11px;
  }
`;

export const GlobalCardSubtitle = styled.div`
  font-size: 30px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  height: 1em;
  color: ${ds.colors.white};
  @media (max-width: ${ds.sizes.sm}) {
    font-size: 18px;
  }
`;

export const GlobalSubtitle = styled.div`
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 1px;
  line-height: 40px;
  color: ${ds.colors.blueGray};
  margin-bottom: 32px;
  @media (max-width: ${ds.sizes.md}) {
    margin-bottom: 16px;
    height: 40px;
    line-height: 20px;
    font-size: 12px;
  }
`;

export const GlobalSeeMore = styled.a`
  display: block;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 4px;
  margin-top: 56px;
  text-transform: uppercase;
  cursor: pointer;
  font-size: ${ds.fontSizes.large};
  font-weight: 500;
  color: ${ds.colors.blueGray};
  background: ${ds.colors.isabelline};
  &:hover {
    background: ${ds.colors.isabellineDark};
  }
  @media (max-width: ${ds.sizes.lg}) {
    margin-top: 8px;
  }
`;

export const GlobalDownloadBtn = styled.a`
  display: inline-block;
  width: auto;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: ${ds.colors.blueGray};
  background: ${ds.colors.isabelline};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-radius: 4px;
  margin-right: 1px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 11px;
  text-transform: uppercase;
  i {
    font-size: 16px;
    margin-right: 5px;
  }
  &:hover {
    background: ${ds.colors.isabellineDark};
  }
  @media (max-width: ${ds.sizes.sm}) {
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 16px;
    span {
      display: none;
    }
  }
`;

export const GlobalPrintBtn = styled.a`
  display: inline-block;
  width: auto;
  height: 40px;
  line-height: 40px;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
  color: ${ds.colors.blueGray};
  background: ${ds.colors.isabelline};
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  display: none;
  &:hover {
    background: ${ds.colors.isabellineDark};
  }
  @media (max-width: ${ds.sizes.sm}) {
    padding-left: 12px;
    padding-right: 12px;
    margin-bottom: 16px;
  }
`;

export const GlobalRow = styled.div`
  display: flex;
  background: ${ds.colors.white};
  min-height: 48px;
  border-bottom: 1px solid ${ds.colors.blueShadow};
  position: relative;
  margin: 0;
  transition: all 200ms linear;
  &:hover {
    background: ${ds.colors.whiteSmoke};
  }
  & > div {
    padding-top: 5px;
    padding-bottom: 5px;
  }
  &:last-child {
    border-bottom: 0;
    margin-bottom: 0px;
  }
  @media (max-width: ${ds.sizes.lg}) {
    min-height: 0px;
    padding: 10px 0px;
    border-radius: 4px;
  }
`;

export const GlobalColumnBold = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${ds.colors.gunMetal};
  border-right: 1px solid ${ds.colors.blueShadow};
  word-break: break-all;
  overflow: hidden;
  margin-botton:10px;
  @media (max-width: ${ds.sizes.lg}) {
    font-size: 16px;
    width: 100%;
    justify-content: flex-start;
    border-right: 0;
    align-items: flex-start;
    flex-direction: column;
    display: none;
    margin-bottom: 10px;    
    &.opened {
      display: block;
    }
  }
`;

export const GlobalColumnNormal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: ${ds.colors.blueGray};
  border-right: 1px solid ${ds.colors.blueShadow};
  word-break: break-all;
  &:last-child {
    border-right: 0;
  }
  @media (max-width: ${ds.sizes.lg}) {
    font-size: 16px;
    justify-content: flex-start;
    border-right: 0;
    align-items: flex-start;
    flex-direction: column;
    display: none;
    &.opened {
      display: block;
    }
  }
`;

export const GlobalMobileHeader = styled.div`
  display: none;
  @media (max-width: ${ds.sizes.lg}) {
    display: flex;
    font-size: 8px;
    line-height: 14px;
    font-weight: 400;
    text-transform: uppercase;
    color: ${ds.colors.manatee};
  }
  @media (max-width: ${ds.sizes.lg}) {
    &.text-md-right{
      display: block;
      text-align: right;
    }
  }
`;

export const ToggleButton = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  right: 8px;
  bottom: 8px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  padding: 0;
  color: ${ds.colors.blueGray};
  display: none;
  outline: none;
  @media (max-width: ${ds.sizes.lg}) {
    display: block;
  }
`;

export const RowWrapper = styled.div`
  position: relative;
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const GlobalCopyButton = styled.span`
  cursor: pointer;
  padding-left: 10px;  
`;

export const GlobalCopyStatus = styled.span`
  color: ${ds.colors.greenUfo};
  font-size: 9px;
  padding-left: 5px;
`;

export const Container = styled.div`
  height: 100%;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 125px;
  height: 40px;
  border-radius: 4px;
  background-color: ${ds.colors.white};
  border: 1px solid ${ds.colors.blueGray};
  transition: all 200ms linear;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  &:before {
    content: '';
    background-image: linear-gradient(104deg, ${ds.colors.blueGray}, ${ds.colors.gunMetal});
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0;
    z-index: 0;
    transition: all 200ms linear;
  }

  &:hover {
    border: 1px solid transparent;
  }

  &:hover:before {
    opacity: 1;
  }

  &:hover p {
    background-image: none;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: #fff;
  }

  @media (max-width: ${ds.sizes.sm}) {
    width: 75px;
  }
  p {
    background-image: linear-gradient(104deg, ${ds.colors.blueGray}, ${ds.colors.gunMetal});
    font-size: 14px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    z-index: 2;
    @media (max-width: ${ds.sizes.sm}) {
      font-size: 12px;
    }
  }
`;