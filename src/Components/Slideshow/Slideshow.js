import React from "react";

import Step from '../../Components/Slideshow/Step';
import Stepper from '../../Components/Stepper/Stepper';

export default class Slideshow extends React.Component {
    constructor() {
        super();
        this.state = { currentStep: 1 }
    }

    handleCurrentStep = () => { this.setState({ currentStep: this.state.currentStep + 1 }) }

    handleStepper = step => { this.setState({ currentStep: step }) }

    render() {
        return ( 
            <div className={["gp_slideshow--wrapper gp_slideshow--step" + this.state.currentStep]}>
                <Step changeCurrentStep={this.handleCurrentStep} step={this.state.currentStep} />

                <Stepper step={this.state.currentStep} changeStepper={this.handleStepper} />
            </div>
            
        );
    }
}