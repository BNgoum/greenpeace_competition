import React from "react";

export default class Stepper extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    handleOnClickStepper = step => {
        this.props.changeStepper(step);
    }

    render() {
        const currentStep = this.props.step;

        return (
            <div className="gp_stepper">
                <button className="gp_stepper--btn" onClick={() => this.handleOnClickStepper(1)}>
                    <span className={`gp_stepper--item ${currentStep === 1 && "gp_stepper--active"}`}></span>
                </button>
                <button className="gp_stepper--btn" onClick={() => this.handleOnClickStepper(2)}>
                    <span className={`gp_stepper--item ${currentStep === 2 && "gp_stepper--active"}`}></span>
                </button>
                <button className="gp_stepper--btn" onClick={() => this.handleOnClickStepper(3)}>
                    <span className={`gp_stepper--item ${currentStep === 3 && "gp_stepper--active"}`}></span>
                </button>
            </div>
        );
    }
}