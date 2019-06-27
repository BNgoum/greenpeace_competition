import React from "react";

export default class Defi extends React.Component {
    constructor() {
        super();
        this.state = {
            isSelected: 0
        }
    }

    handleOnClick = () => {
        this.props.history.push('/signatures/');
    }

    render() {
        return (
            <section className="gp_defi_jour gp_defi_jour--success">
                <button className="gp_defi_jour--close" onClick={this.handleOnClick}></button>

                <div className="gp_defi_jour--header">
                    <span className="gp_title">Bravo !</span>
                    <span className="gp_sub-title">Tu viens de remporter <span className="gp_title--secondary">50 points</span></span>
                
                    <p className="gp_text">Rendez-vous le 23 Août pour voir l’équipage réaliser le défi...</p>
                </div>

                <div className="gp_defi_jour--content">
                    <span className="gp_icon_user--blue"></span>
                    <p className="gp_text">2 045 personnes ont aussi participé à ce vote.</p>
                    <p className="gp_text">Et si vous le partagiez pour embarquer vos proches dans ces défis ?</p>

                    <button className="gp_btn--rs gp_btn--rs-fb"></button>
                    <button className="gp_btn--rs gp_btn--rs-instagram"></button>
                    <button className="gp_btn--rs gp_btn--rs-twitter"></button>
                </div>
            </section>
        );
    }
}