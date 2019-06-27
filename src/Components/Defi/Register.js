import React from "react";

import AvatarProfil from "../AvatarProfil/AvatarProfil";
import InputText from "../Formulaire/InputText";

export default class Signatures extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        }
    }

    componentWillMount() {
        this.setState({email: localStorage.getItem('email') || "lucas.delamer@gmail.com" })
    }

    handleOnChange = (type, text) => {
        if (type === "email") {
            this.setState({ email: text })
        } else {
            this.setState({ password: text })
        }
    }

    render() {
        return (
            <section className="gp_defi_jour gp_defi_jour--register">
                <button className="gp_defi_jour--close"></button>

                <div className="gp_defi_jour--header">
                    <AvatarProfil />
                </div>

                <div className="gp_defi_jour--content">
                    <p className="gp_text gp_text--big">Top ! Tu viens de remporter ton premier défi !</p>
                    <p className="gp_text">Choisi un mot de passe pour les sauvegarder et faire évoluer ton avatar au fil des défis.</p>
                
                    <InputText idInputText="inputEmailRappel" changeText={this.handleOnChange} validateForm={this.handleValideForm} type="emailRappel" placeholder={this.state.email} typeLabel="email" defaultValue={this.state.email} />
                    <InputText idInputText="inputPassword" changeText={this.handleOnChange} validateForm={this.handleValideForm} type="password" placeholder="motdepassesupersecret" typeLabel="password" />
                </div>
            </section>
        );
    }
}