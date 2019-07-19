import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Config from '../../config';
import ContactStep from './ContactStep';
import ScalerStep from './ScalerStep';
import ResultStep from './ResultStep';

import { ContactInfo, Answer } from '../../commonTypes';
import { Button } from '../../styles/globalStyled';

import {
  Controller
} from './elements';

interface Props {
  location?: any,
  handleChange?: any
};

interface State {
  currentStep: number,
  contactInfo: ContactInfo,
  answers: Answer[]
};

class StepsForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      currentStep: 1,
      contactInfo: {
        email: '',
        fullName: '',
        company: ''
      },
      answers: [
        {
          values: []
        },
        {
          values: []
        },
        {
          values: []
        }
      ]
    }
    this.handleContactChanges = this.handleContactChanges.bind(this);
    this.handleAnswersChanges = this.handleAnswersChanges.bind(this);

    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
  };

  handleContactChanges = (event: any) => {
    const { name, value } = event.target;

    let {
      contactInfo
    } = this.state;

    switch (name) {
      case 'email':
        contactInfo.email = value;
        break;
      case 'fullName':
        contactInfo.fullName = value;
        break;
      case 'company':
        contactInfo.company = value;
        break;
    }

    this.setState((prevState: State) => {
      return {
        ...prevState,
        contactInfo
      } as State
    });
  };

  handleAnswersChanges = (event: any) => {
    const { name, value } = event.target;

    let {
      currentStep,
      answers
    } = this.state;

    answers[currentStep - 2].values[name] = value;

    this.setState((prevState: State) => {
      return {
        ...prevState,
        answers
      } as State
    });
  };

  _next() {
    const { currentStep } = this.state;
    this.setState({
      currentStep: (currentStep >= (Config.scalerSteps.length + 1) ? 5 : currentStep + 1)
    });
  };

  _prev() {
    const { currentStep } = this.state;
    this.setState({
      currentStep: (currentStep <= 1 ? 1 : currentStep - 1)
    });
  };

  get previousButton() {
    let { currentStep } = this.state;
    if (currentStep !== 1 && currentStep <= (Config.scalerSteps.length + 1)) {
      return (
        <Button
          className="btn btn-secondary"
          type="button" onClick={this._prev}>
          <p>Previous</p>
        </Button>
      );
    }
    return null;
  }

  get nextButton() {
    let { currentStep } = this.state;
    if (currentStep < (Config.scalerSteps.length + 1)) {
      return (
        <Button
          className="btn btn-primary float-right"
          type="button" onClick={this._next}>
          <p>Next</p>
        </Button>
      );
    }
    return null;
  }

  get submitButton() {
    let { currentStep } = this.state;
    if (currentStep === (Config.scalerSteps.length + 1)) {
      return (
        <Button
          className="btn btn-primary float-right"
          type="button" onClick={this._next}>
          <p>Submit</p>
        </Button>
      );
    }
    return null;
  }

  render() {
    const {
      currentStep,
      contactInfo,
      answers
    } = this.state;

    return (
      <Fragment>
        <p>Step {this.state.currentStep} </p>
        <form>
          <ContactStep
            currentStep={currentStep}
            handleChange={this.handleContactChanges}
            contactInfo={contactInfo}
          />
          <ScalerStep
            currentStep={currentStep}
            handleChange={this.handleAnswersChanges}
            answers={answers}
          />
          <ResultStep
            currentStep={currentStep}
            answers={answers}
          />
          <Controller>
            {this.previousButton}
            {this.nextButton}
            {this.submitButton}
          </Controller>
        </form>
      </Fragment>
    )
  }
};

export default withRouter(React.createFactory(StepsForm));