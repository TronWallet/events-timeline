import styled from 'styled-components';

import ds from '../../styles/designSystem';

export const Controller = styled.div`
  display: flex;
  flex-direction: row;
  button {
    margin-right: 10px;
  }
`;

export const InputGroup = styled.div`
  margin-top: 14px;
  margin-bottom: 14px;
  display: flex;
  flex-direction: column;
  & > label {
    line-height: 24px;
    padding-top: 4px;
    padding-bottom: 10px;
  }
  &:last-of-type {
    padding-bottom: 10px;
  }
`;

export const TextInput = styled.input`
  width: 100%;
  background-color: #fff;
  color: ${ds.colors.white};
  font-weight: 400;
  border: 1px solid #bdc8d3;
  border-radius: 4px;
  font-size: ${ds.fontSizes.menu};
  height: 42px;
  line-height: 40px;
  display: block;
  padding-left: 14px;
  padding-right: 140px;
  transition: all 0.25s linear;
  color: ${ds.colors.gunMetal};
  &:focus {
    outline: none !important;
    border-color: ${ds.colors.gunMetal};
  }
  &::placeholder {
    color: #8a8cb2;
  }
  @media (max-width: ${ds.sizes.sm}) {
    padding-left: 15px;
    padding-right: 75px;
    font-size: ${ds.fontSizes.xLarge};
  }
  -webkit-appearance: none;
`;

export const ScalesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 8px 0 4px;
  span {
    min-width: 150px;
  }
  span:last-of-type {
    text-align: right;
  }
`;