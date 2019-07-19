import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Config from '../../config';

import { Content } from './elements';
import { Container, Button } from '../../styles/globalStyled';

class Timeline extends Component<{}> {

  render() {
    return (
      <Container>
        <Content>{Config.welcome}</Content>
        <Link to='/questionnaire' >
          <Button>
            <p>Timeline</p>
          </Button>
        </Link>
      </Container>
    )
  }
};

export default Timeline;