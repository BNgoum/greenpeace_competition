import React from "react";

export default class InputText extends React.Component {
    constructor() {
        super();
        this.state = { 
            text: ""
        }
    }

    handleOnChange = event => {
        this.setState({
            text: event.target.value
        })

        if (this.props.type === "firstname") { this.props.changeText("firstname", event.target.value) }
        else { this.props.changeText("email", event.target.value) }
    }

    handleOnKeyDown = event => {
        console.log('Event on keydown : ', event.key);
    }

    render() {
        const { label, idInputText } = this.props;

        return (
            <div className="gp_input--text-wrapper">
                <label htmlFor={idInputText} className="gp_input--text-label">{label}</label>
                <input id={idInputText} type="text" value={this.state.text} onChange={this.handleOnChange} onKeyDown={this.handleOnKeyDown} placeholder="Sébastien le crabe" className="gp_input--text" />
            </div>
        );
    }
}