import React from "react";
import {withRouter} from 'react-router-dom';

class InputText extends React.Component {
    constructor() {
        super();
        this.state = { 
            text: "",
            isEmpty: false
        }
    }

    handleOnChange = event => {
        this.setState({ text: event.target.value, isEmpty: false });

        if (this.props.type === "firstname") { this.props.changeText("firstname", event.target.value) }
        else { this.props.changeText("email", event.target.value) }
    }

    handleOnKeyDown = event => {
        if (event.key === "Enter") {
            if (this.state.text === "") {
                event.preventDefault();
                this.setState({ isEmpty: true });
            } else {
                event.preventDefault();
                this.setState({ isEmpty: false, text: "" });

                if (this.props.type === "firstname") {
                    localStorage.setItem('firstname', this.state.text);
                    this.props.validateForm("firstname", true);

                } else if (this.props.type === "email") {
                    localStorage.setItem('email', this.state.text);

                    this.props.history.push('/home');
                } else if (this.props.type === "password") {
                    this.props.history.push('/home');
                }
            }
        }
    }


    render() {
        const { label1, label2, idInputText, typeLabel, placeholder } = this.props;
        
        return (
            <form className="gp_input--text-wrapper">
                <label htmlFor={idInputText} className="gp_input--text-label">{label1}<span className="gp_input--text-sub-label">{label2}</span></label>
                <input id={idInputText} type="text" value={this.props.defaultValue ? this.props.defaultValue.toString() : this.state.text} onChange={this.handleOnChange} onKeyDown={this.handleOnKeyDown} placeholder={placeholder} className="gp_input--text" />
                <p className={ "gp_message--error " + (this.state.isEmpty ? "gp_visible" : "gp_hidden") }>Vous devez saisir un { typeLabel }.</p>
            </form>
        );
    }
}

export default withRouter(InputText)