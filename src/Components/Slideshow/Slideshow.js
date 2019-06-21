import React from "react";

import Step1 from '../../Components/Slideshow/Step1';
import Step2 from '../../Components/Slideshow/Step2';
import Step3 from '../../Components/Slideshow/Step3';

export default class Slideshow extends React.Component {
    constructor() {
        super();
        this.state = {
            currentStep: 1
        }
    }

    handleCurrentStep = step => {
        this.setState({
            currentStep: step
        })
    }

    displayStep = () => {
        if (this.state.currentStep === 1) { return <Step1 changeCurrentStep={this.handleCurrentStep} /> }
        else if (this.state.currentStep === 2) { return <Step2 changeCurrentStep={this.handleCurrentStep} /> }
        else { return <Step3 changeCurrentStep={this.handleCurrentStep} /> }
    }

    render() {
        return ( this.displayStep() );
    }
}