import React from "react";

export default class Stepper extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        const currentStep = this.props.step;

        return (
            <div className="gp_stepper">
                <span className={`gp_stepper--item ${currentStep === 1 && "gp_stepper--active"}`}></span>
                <span className={`gp_stepper--item ${currentStep === 2 && "gp_stepper--active"}`}></span>
                <span className={`gp_stepper--item ${currentStep === 3 && "gp_stepper--active"}`}></span>
            </div>
        );
    }
}