import React from "react";

export default class DefiUnlock extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <section className="gp_defi--container gp_defi--lock">
                <div className="gp_defi--bg"></div>
                <button className="gp_defi--content">
                    <span className="gp_defi--label">Défi du jour 2<br/>débloqué</span>
                    <span className="gp_defi--icon"></span>
                </button>
            </section>
            
        );
    }
}