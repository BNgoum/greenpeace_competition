import React from "react";

import Card from '../Components/Card/Card';

export default class Action extends React.Component {
    constructor() {
        super();
        this.state = {
            listCards: [
                {
                    id: 1,
                    title: 'Défi du jour 1',
                    isActive: false,
                    isLocked: true
                },
                {
                    id: 2,
                    title: 'Défi du jour 2',
                    isActive: false,
                    isLocked: false
                },
                {
                    id: 3,
                    title: 'Défi du jour 3',
                    isActive: false,
                    isLocked: true
                }
            ]
        }
    }

    handleCardState = id => {
        this.setState(prevState => ({
            listCards: prevState.listCards.map(
                el => el.id === id ? { ...el, isActive: true } : el
            )
        }))
    }

    render() {
        return (
            <div className="gp_action">
                <h2>Action page</h2>

                {
                    this.state.listCards.map(card => {
                        return <Card data={card} key={card.id.toString()} changeStateCard={this.handleCardState} />
                    })
                }
            </div>
        );
    }
}