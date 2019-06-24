import React from "react";
import { Link } from "react-router-dom";

import InputText from '../Formulaire/InputText';

import logo from "../../assets/img/logo.svg";

export default class SignUp extends React.Component {
    constructor() {
        super();
        this.state = { 
            firstname: "",
            email: "",
            firstnameValide: false
        }
    }

    handleOnChange = (type, text) => {
        if (type === "firstname") {
            this.setState({ firstname: text })
        } else {
            this.setState({ email: text })
        }
    }

    handleValideForm = (type, bool) => {
        if (type === "firstname") {
            this.setState({firstnameValide: bool})
        }
    }

    render() {
        return ( 
            <div className={"gp_signup gp_signup--" + ( this.state.firstnameValide ? "step2" : "step1" )} >
                <div className="gp_signup_header">
                    <img src={logo} alt="Logo Greenpeace" className="gp_logo--mini" />
                    <Link to="/" className="gp_link">J'ai déjà un compte</Link>
                </div>
                
                {
                    this.state.firstnameValide ?
                    <InputText label1="Et ton email ?" label2="Promis, on en prendra soin." idInputText="inputEmail" changeText={this.handleOnChange} validateForm={this.handleValideForm} type="email" placeholder="sebastien.lecrabe@gmail.com" typeLabel="email" />
                    :
                    <InputText label1="Faisons connaissance." label2="Quel est ton prénom ?" idInputText="inputFirstName" changeText={this.handleOnChange} validateForm={this.handleValideForm} type="firstname" placeholder="Sébastien le crabe" typeLabel="prénom" />
                }
            </div>
        );
    }
}