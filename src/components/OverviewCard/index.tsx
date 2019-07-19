import React, { Component, ReactNode } from 'react';

import { Container, ShadowBox, Content } from './elements';

interface Props {
  location?: any,
  children?: ReactNode
};

class OverviewCard extends Component<Props> {
  render() {

    return (
      <Container className='container'>
        <div>
          <ShadowBox>
            <Content className='row'>
              {this.props.children}
            </Content>
          </ShadowBox>
        </div>
      </Container>
    )
  }
};

export default OverviewCard;