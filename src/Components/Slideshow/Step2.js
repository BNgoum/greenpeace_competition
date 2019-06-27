import React from "react";
import { Link } from "react-router-dom";

import logoHeader from "../../assets/img/greenpeace_pto.svg";
import logo from "../../assets/img/logo.svg";

export default class Step2 extends React.Component {
    handleOnclick = () => {
        this.props.changeCurrentStep(3);
    }

    handleOnClickStepper = () => {
        this.props.changeCurrentStep(1);
    }

    render() {
        return (
            <div className="gp_slideshow gp_slideshow--step2">
                <div className="gp_slideshow_header">
                    <img src={logoHeader} alt="Logo Greenpeace Protect the Oceans" />
                    <Link to="/home/" className="gp_link">Passer</Link>
                </div>

                <div className="gp_slideshow_content">
                    <img src={logo} alt="Logo Greenpeace 30 secondes" />
                    <h1 className="gp_title">30 secondes</h1>
                    <p className="gp_sub-title">30 secondes qui te permettront d’apprendre, de partager, d’échanger et de t’engager pour la préservation des océans. </p>
                </div>

                <div className="gp_slideshow_footer">
                    <button className="gp_btn gp_btn--primary" onClick={this.handleOnclick}>Suivant</button>
                </div>
            </div>
        );
    }
}