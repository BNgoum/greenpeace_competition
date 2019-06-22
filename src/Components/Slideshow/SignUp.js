import React from "react";
import { Link } from "react-router-dom";

import InputText from '../Formulaire/InputText';

import logo from "../../assets/img/logo.svg";

export default class SignUp extends React.Component {
    constructor() {
        super();
        this.state = { 
            firstname: "",
            email: ""
        }
    }

    handleOnChange = (type, text) => {
        if (type === "firstname") {
            this.setState({ firstname: text })
        } else {
            this.setState({ email: text })
        }
    }

    render() {
        return ( 
            <div className="gp_signup">
                <div className="gp_signup_header">
                    <img src={logo} alt="Logo Greenpeace" className="gp_logo--mini" />
                    <Link to="/" className="gp_link">J'ai déjà un compte</Link>
                </div>

                <InputText label="Faisons connaissance. Quel est ton prénom ?" idInputText="inputFirstName" changeText={this.handleOnChange} type="firstname" />
            </div>
        );
    }
}