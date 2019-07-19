import React from 'react';
import { Container } from './elements';

import NotFound from '../../components/NotFound';

const capitalize = (s: any) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
};

const getRouteName = (url: string) => {
  const routeName = url.split('/')[1]

  return capitalize(routeName)
};

const PageNotFound: React.FC = (data: any) => {
  return (
    <Container className='container'>
      <NotFound searchTerm={data.match.params.id} route={getRouteName(data.match.url)} />
    </Container>
  )
};

export default PageNotFound;