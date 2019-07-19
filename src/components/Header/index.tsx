import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Config from '../../config';

import {
  HeaderContainer,
  NavHeader,
  Container,
  Title
} from './elements';

interface Props {
  location?: any
};

class Header extends Component<Props> {
  componentDidMount = () => {
    document.title = Config.title;
  };

  _isHomePage = (location: any) => location.pathname === '/';

  render() {
    const { location } = this.props;
    const isHome = this._isHomePage(location);

    let bgColor = 'transparent';
    const position = 'relative';

    if (!isHome) {
      bgColor = '#2e2f47';
    }

    return (
      <div>
        <HeaderContainer bgColor={bgColor} position={position}>
          <div>
            <Container className='container'>
              <NavHeader className='navbar navbar-expand-lg'>
                <Link to='/' className='navbar-brand'>
                  <Title>GETTY/IO DevOps Assessment</Title>
                </Link>
              </NavHeader>
            </Container>
          </div>
        </HeaderContainer>
      </div>
    )
  }
};

export default withRouter(React.createFactory(Header));