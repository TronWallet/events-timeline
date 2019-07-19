import styled from 'styled-components';
import ds from '../../styles/designSystem';

export const Container = styled.div`
  min-height: calc(100vh - 400px);
  padding-top: 48px;
  padding-bottom: 163px;
  @media (max-width: ${ds.sizes.md}) {
    padding-bottom: 92px;
  } 
  .form-search {
    max-width:75%;
  }
`;