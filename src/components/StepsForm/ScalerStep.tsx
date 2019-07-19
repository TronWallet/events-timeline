import React, { Component } from 'react';
import { Answer } from '../../commonTypes';

import {
  InputGroup,
  ScalesWrapper
} from './elements';

import Config from '../../config';

interface ScalerProps {
  questionnaireIndex: number,
  stepIndex: number,
  handleChange: any,
  value: number,
  lowerLabel: string,
  higherLabel: string
};

class Scaler extends Component<ScalerProps> {
  render() {
    const {
      questionnaireIndex,
      stepIndex,
      handleChange,
      value,
      lowerLabel,
      higherLabel
    } = this.props;

    const scales = [1, 2, 3, 4, 5].map((index) => {
      return (
        <input
          key={questionnaireIndex + '-' + stepIndex + '-' + index}
          type="radio"
          name={`${stepIndex}`}
          value={index}
          checked={Number(value) === index}
          onChange={handleChange} />
      )
    });

    return (
      <ScalesWrapper>
        <span>{lowerLabel}</span>
        {scales}
        <span>{higherLabel}</span>
      </ScalesWrapper>
    );
  };
};

interface Props {
  currentStep: number,
  handleChange: any,
  answers: Answer[]
};

class ScalerSteps extends Component<Props> {
  render() {
    const {
      currentStep,
      handleChange,
      answers
    } = this.props;

    const {
      scalerSteps
    } = Config;

    if (currentStep <= 1 || currentStep > (scalerSteps.length + 1)) {
      return null;
    };

    const questionnaireIndex = currentStep - 2;

    const {
      title,
      questions
    } = scalerSteps[questionnaireIndex];

    const questionsComponent = questions.map((question, index: number) => {
      return (
        <InputGroup key={'questionnaire-' + questionnaireIndex + '-question-' + index}>
          <label htmlFor={'question-' + questionnaireIndex + '-' + index}>{question.label}</label>
          <Scaler
            questionnaireIndex={(questionnaireIndex)}
            stepIndex={index}
            handleChange={handleChange}
            value={answers[questionnaireIndex].values[index]}
            lowerLabel={question.lowerLabel}
            higherLabel={question.higherLabel} />
        </InputGroup>
      )
    });

    // The markup for the Step 1 UI
    return (
      <div className="form-group">
        <h4>{title}</h4>
        {questionsComponent}
      </div>
    )
  }
};

export default ScalerSteps;