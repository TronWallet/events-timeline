import styled from 'styled-components';
import ds from '../../styles/designSystem';

export const Container = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;
`;

export const Content = styled.div`
  margin:0;
  display: flex;
  flex-direction: column;
  padding: 24px;
  & > div{
    padding:0;
  }
`;

export const ShadowBox = styled.div`
  border-radius: 4px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  background-color: ${ds.colors.white};
  margin-bottom: 16px;
  position:relative;
  z-index:2;
  min-height: 300px;
`;

export const InfoCards = styled.div`
  .row{
    border-right:1px solid ${ds.colors.blueShadow};
  }
  .row:first-child{
    border-bottom:1px solid ${ds.colors.blueShadow};
  }
  .row > div:first-child > div{
    border-left: none;
  }
  @media (max-width: ${ds.sizes.md}) {
    .row{
      border-right:none;
    } 
  }
  @media (max-width: ${ds.sizes.sm}) {
    .row:first-child{
      border-bottom:none;
    }
    .row > div > div{
      border-bottom:1px solid ${ds.colors.blueShadow};
    } 
  }
`;

export const ChartCard = styled.div`
  padding-top:10px !important;
  height:140px;
  @media (max-width: ${ds.sizes.md}) {
    border-top:1px solid ${ds.colors.blueShadow};
    height:160px;
  }
  @media (max-width: ${ds.sizes.sm}) {
    border-top: none;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  width: 100%;
  height: 75px;
  transition: all 200ms linear;
  padding:0px 20px;
  border-left:1px dotted ${ds.colors.blueShadow};
  .whiteText {
    color: ${ds.colors.white};
  }
  &.filled {
    border: none;
    background-image: linear-gradient(132deg, ${ds.colors.pinkCerise}, ${ds.colors.purpleShiny});
  }
  & i{
    font-size:40px;
    margin-right:5px;
    color:${ds.colors.blueGray};
  }
  &.price-card{
    flex-direction: row;
    justify-content: left;
    align-items:center;
  }
  @media (max-width: ${ds.sizes.sm}) {
    & i{
      position:absolute;
      left:10px;
      top:12px;
      font-size:28px;
    }
    &.price-card{
      flex-direction: row-reverse;
      justify-content: center;
      align-items:center;
      text-align:center;
    } 
    height: 55px;
    align-items:center;
  }
`;

export const Title = styled.div`
  font-size: 13px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.9px;
  background-image: linear-gradient(104deg,#ee3f71,#7d3ff1);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: ${ds.sizes.lg}) {
    font-size: 12px;
  }
  @media (max-width: ${ds.sizes.sm}) {
    font-size: 11px;
  }
`;

export const Subtitle = styled.div`
  font-size: 22px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${ds.colors.gunMetal};
  @media (max-width: ${ds.sizes.md}) {
    font-size: 20px;
  }
  @media (max-width: ${ds.sizes.sm}) {
    font-size: 18px;
  }
`;

export const MainCoinIcon = styled.img`
  max-width: 50px;
  height: auto;
  object-fit: contain;
  padding-top: 0px;
  padding-bottom: 0px;
  speak: none;
  display: inline-block;
  width: 1.8em;
  margin-right: .5em;
  margin-left: 0;  
`;