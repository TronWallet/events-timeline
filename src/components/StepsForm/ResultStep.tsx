import React, { Component } from 'react';
import Config from '../../config';
import { Answer } from '../../commonTypes';

interface Props {
  currentStep: number,
  answers: Answer[]
};

class ResultStep extends Component<Props> {
  render() {
    const {
      currentStep,
      answers
    } = this.props;

    if (currentStep < (Config.scalerSteps.length) || currentStep < (Config.scalerSteps.length + 2)) {
      return null;
    };

    const totalQuestions = Config.scalerSteps.reduce((total, step) => {
      return total + Number(step.questions.length);
    }, 0);

    const score = answers.reduce((total, answer) => {
      const currentScore = answer.values.reduce((total, value) => {
        return total + Number(value);
      }, 0);
      return total + Number(currentScore);
    }, 0);

    return (
      <div>
        <span>Total Points: </span>{score}<br/>
        <span>Score: </span>{Math.floor(score / (totalQuestions * 5) * 100)}/100
      </div >
    );
  };
};

export default ResultStep;