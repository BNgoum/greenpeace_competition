import React from "react";

export default class Card extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    handleOnclick = event => {
        const { isLocked, isActive, id } = this.props.data;

        if (!isLocked && !isActive) {
            this.props.changeStateCard(id);
        }
        else { event.preventDefault(); }
    }

    

    render() {
        const { title, isActive, isLocked } = this.props.data;

        return (
            <button className="gp_card" onClick={this.handleOnclick}>
                <h2>{title}</h2>
                {
                    isLocked ? <p>Le défi est ouvert.</p> : <p>Le défi n'est pas ouvert.</p>
                }
            </button>
        );
    }
}