import React from "react";

export default class DefiUnlock extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    handleOnClick = () => {
        if (!this.props.isLock) {
            this.props.handleIsOpen();
        }
    }

    render() {
        const { isLock, numberDefi } = this.props;
        return (
            <section className={"gp_defi--container gp_defi--" + (isLock ? "lock" : "unlock")}>
                <div className={"gp_defi--bg gp_defi--bg" + numberDefi}></div>
                <button className="gp_defi--content" onClick={this.handleOnClick}>
                    {
                        isLock ? 
                        <span className="gp_defi--label">Rendez-vous<br/>demain pour votre<br/>prochain défi !</span>
                        :
                        <span className="gp_defi--label">Défi du jour<br/>débloqué !</span>
                    }
                    <span className="gp_defi--icon"></span>
                </button>
            </section>
            
        );
    }
}