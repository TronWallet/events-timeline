import React, { Component } from 'react';

import { InputGroup, TextInput } from './elements';

interface ContactInfo {
  email: string,
  fullName: string,
  company?: string
};

interface Props {
  currentStep: number,
  contactInfo: ContactInfo,
  handleChange: any
};

class ContactStep extends Component<Props> {
  render() {
    const {
      currentStep,
      contactInfo,
      handleChange
    } = this.props;

    if (currentStep !== 1) {
      return null
    }

    return (
      <div>
        <InputGroup>
          <label htmlFor="email">Email address</label>
          <TextInput
            className="form-control"
            id="email"
            name="email"
            type="text"
            placeholder="Enter email"
            value={contactInfo.email}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor="fullName">Full Name</label>
          <TextInput
            className="form-control"
            id="email"
            name="fullName"
            type="text"
            placeholder="Enter Full Name"
            value={contactInfo.fullName}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor="company">Company</label>
          <TextInput
            className="form-control"
            id="company"
            name="company"
            type="text"
            placeholder="(Optional) Enter Company"
            value={contactInfo.company}
            onChange={handleChange}
          />
        </InputGroup>
      </div >
    )
  }
};

export default ContactStep;