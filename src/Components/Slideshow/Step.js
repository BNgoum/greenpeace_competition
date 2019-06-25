import React from "react";
import { Link } from "react-router-dom";

import logoHeader from "../../assets/img/greenpeace_pto.svg";
import logo from "../../assets/img/logo.svg";

export default class Step extends React.Component {

    handleOnclick = () => {
        this.props.changeCurrentStep();
    }
    
    displayContent = () => {
        if (this.props.step === 1) {
            return (
                <>
                    <h1 className="gp_title">1 défi par jour</h1>
                    <p className="gp_sub-title">Chaque jour on te propose un défi (lecture, partage, quizz, vote) à réaliser en 30 secondes chrono.</p>
                </>
            )
        } else if (this.props.step === 2) {
            return (
                <>
                    <h1 className="gp_title">30 secondes</h1>
                    <p className="gp_sub-title">30 secondes qui te permettront d’apprendre, de partager, d’échanger et de t’engager pour la préservation des océans. </p>
                </>
            )
        } else {
            return (
                <>
                    <h1 className="gp_title">30 jours</h1>
                    <p className="gp_sub-title"> Plus tu réalises de défis, plus tu gagnes des points. Reviens le lendemain pour voir les résultats de la communauté.</p>
                </>
            )
        }
    }

    displayFooter = () => {
        if (this.props.step === 3) {
            return (
                <>
                    <Link to="/signup/" className="gp_btn gp_btn--primary">Go !</Link>
                    <button className="gp_btn gp_btn--secondary">Je signe la pétition</button>
                </>
            )
        } else {
            return <button className="gp_btn gp_btn--primary" onClick={this.handleOnclick}>Suivant</button>
        }
    }

    render() {
        return (
            <div className="gp_slideshow">
                <div className="gp_slideshow_header">
                    <img src={logoHeader} alt="Logo Greenpeace Protect the Oceans" />
                    <a href="/" className="gp_link">Passer</a>
                </div>

                <div className="gp_slideshow_content">
                    <img src={logo} alt="Logo Greenpeace 30 secondes" className="gp_slideshow--logo" />
                    { this.displayContent() }
                </div>

                <div className="gp_slideshow_footer">
                    { this.displayFooter() }
                </div>
            </div>
        );
    }
}