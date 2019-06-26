import React from "react";

export default class Defi extends React.Component {
    constructor() {
        super();
        this.state = {
            isSelected: 0
        }
    }

    handleOnClick = choice => {
        this.setState({
            isSelected: choice
        })
    }

    handleVote = () => {
        this.props.history.push('/success/');
    }

    render() {
        return (
            <section className="gp_defi_jour">
                <button className="gp_defi_jour--close"></button>

                <div className="gp_defi_jour--header">
                    <span className="gp_defi_jour--type">Jour 1 - Défi</span>
                    <span className="gp_title">À l'abordage !</span>
                    <span className="gp_text">Quel défi veux-tu donner à nos chers matelots de l’Esperanza ?</span>
                </div>

                <div className="gp_defi_jour--content">
                    <button className={"gp_defi_jour--choice" + (this.state.isSelected === 1 ? " is-selected" : "")} onClick={() => this.handleOnClick(1)}>Réciter l’alphabet en portugais. Après tout, ils longent la côte brésilienne...</button>
                    <button className={"gp_defi_jour--choice" + (this.state.isSelected === 2 ? " is-selected" : "")} onClick={() => this.handleOnClick(2)}>Réciter l’alphabet en portugais. Après tout, ils longent la côte brésilienne...</button>
                    <button className={"gp_defi_jour--choice" + (this.state.isSelected === 3 ? " is-selected" : "")} onClick={() => this.handleOnClick(3)}>Réciter l’alphabet en portugais. Après tout, ils longent la côte brésilienne...</button>
                </div>

                <button className="gp_btn gp_btn--primary" disabled={this.state.isSelected !== 0 ? false : true} onClick={this.handleVote}>Je vote</button>
            </section>
        );
    }
}