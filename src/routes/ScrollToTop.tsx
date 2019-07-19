import React, { Component, ReactNode } from 'react';
import { withRouter } from 'react-router-dom';

interface Props {
  location?: any,
  children?: ReactNode
};

class ScrollToTop extends Component<Props> {
  componentDidUpdate(prevProps: Props) {
    const {
      location
    } = this.props;

    if (location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  };

  render() {
    return this.props.children;
  };
};

export default withRouter(React.createFactory(ScrollToTop));