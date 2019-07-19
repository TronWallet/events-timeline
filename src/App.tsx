import React, { Fragment, Component } from 'react';

import { BrowserRouter, Switch } from 'react-router-dom';

import { GlobalStyle } from './styles/global';

import OverviewCard from './components/OverviewCard';
import Routes from './routes';
import Header from './components/Header';
import Footer from './components/Footer';

type AppState = {
  loaded: boolean
};

class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props)

    this.state = {
      loaded: false
    }
  }
  async componentDidMount() {
    this.setState({
      loaded: true
    })
  }

  render() {
    const { loaded } = this.state;

    if (!loaded) { return null }

    return (
      <BrowserRouter>
        <Switch>
          <Fragment>
            <GlobalStyle />
            <Header />
            <OverviewCard>
              <Routes />
            </OverviewCard>
            <Footer />
          </Fragment>
        </Switch>
      </BrowserRouter>
    )
  }
};

export default App;