import React from "react";

import Stepper from '../../Components/Stepper/Stepper';

import logoHeader from "../../assets/img/greenpeace_pto.svg";
import logo from "../../assets/img/logo.svg";

export default class Step1 extends React.Component {

    handleOnclick = () => {
        this.props.changeCurrentStep(2);
    }

    render() {
        return (
            <div className="gp_slideshow gp_slideshow--step1">
                <div className="gp_slideshow_header">
                    <img src={logoHeader} alt="Logo Greenpeace Protect the Oceans" />
                    <a href="#" className="gp_link">Passer</a>
                </div>

                <div className="gp_slideshow_content">
                    <img src={logo} alt="Logo Greenpeace 30 secondes" />
                    <h1 className="gp_title">1 défi par jour</h1>
                    <p className="gp_sub-title">Chaque jour on te propose un défi (lecture, partage, quizz, vote) à réaliser en 30 secondes chrono.</p>
                </div>

                <div className="gp_slideshow_footer">
                    <button className="gp_btn gp_btn--primary" onClick={this.handleOnclick}>Suivant</button>
                    <Stepper step={1} />
                </div>
            </div>
        );
    }
}