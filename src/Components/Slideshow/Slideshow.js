import React from "react";

import Step1 from '../../Components/Slideshow/Step1';
import Step2 from '../../Components/Slideshow/Step2';
import Step3 from '../../Components/Slideshow/Step3';
import Stepper from '../../Components/Stepper/Stepper';

import logoHeader from "../../assets/img/greenpeace_pto.svg";
import logo from "../../assets/img/logo.svg";

export default class Slideshow extends React.Component {
    constructor() {
        super();
        this.state = {
            currentStep: 1,
            lastStep: 1
        }
    }

    handleCurrentStep = () => {
        this.setState({
            currentStep: this.state.currentStep + 1
        })
    }

    handleStepper = step => {
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
        return ( 
            <div className={["gp_slideshow--wrapper gp_slideshow--step" + this.state.currentStep]}>
                {/* {this.displayStep()} */}

                <Step1 changeCurrentStep={this.handleCurrentStep} step={this.state.currentStep} />

                <Stepper step={this.state.currentStep} changeStepper={this.handleStepper} />
            </div>
            
        );
    }
}