import React from "react";
import { Link } from "react-router-dom";

import logoHeader from "../../assets/img/greenpeace_pto.svg";
import logo from "../../assets/img/logo.svg";

export default class Step3 extends React.Component {

    handleOnClickStepper = () => {
        this.props.changeCurrentStep(2);
    }

    render() {
        return (
            <div className="gp_slideshow gp_slideshow--step3">
                <div className="gp_slideshow_header">
                    <img src={logoHeader} alt="Logo Greenpeace Protect the Oceans" />
                    <Link to="/home/" className="gp_link">Passer</Link>
                </div>

                <div className="gp_slideshow_content">
                    <img src={logo} alt="Logo Greenpeace 30 secondes" />
                    <h1 className="gp_title">30 jours</h1>
                    <p className="gp_sub-title"> Plus tu réalises de défis, plus tu gagnes des points. Reviens le lendemain pour voir les résultats de la communauté.</p>
                </div>

                <div className="gp_slideshow_footer">
                    <button className="gp_btn gp_btn--primary">Go !</button>
                    <button className="gp_btn gp_btn--secondary">Je signe la pétition</button>
                </div>
            </div>
        );
    }
}