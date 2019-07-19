import React, { Component } from 'react';

import {
  Message
} from './elements';

interface Props {
  searchTerm?: any,
  route?: any
};

class NotFound extends Component<Props> {
  render() {
    const { searchTerm, route } = this.props;

    return (
      <Message>
        <h1><span>{route || 'Page'}</span> not found</h1>
        <h2>Please re-search or double-check the information provided</h2>
        {searchTerm && <p className='search-term'>#{searchTerm}</p>}
      </Message>
    )
  }
};

export default NotFound;