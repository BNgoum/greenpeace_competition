import React from "react";

export default class DefiOpen extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        const { day, type, label, description, participants } = this.props;

        return (
            <section className="gp_defi--container gp_defi--open">
                <div className="gp_defi--bg"></div>
                <button className="gp_defi--content">
                    <span className="gp_defi--name">Jour {day} - {type} </span>
                    <h2 className="gp_defi--label">{label}</h2>
                    <span className="gp_defi--description">{description}</span>

                    <span className="gp_defi--footer">
                        <span className="gp_defi--icon"></span>
                        <span className="gp_defi--participants">{participants} participants</span>
                        <span className="gp_defi--plus"></span>
                    </span>
                </button>
            </section>
        );
    }
}