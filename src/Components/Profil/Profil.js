import React from "react";
import AvatarProfil from "../AvatarProfil/AvatarProfil";

export default class Profil extends React.Component {
    constructor() {
        super();
        this.state = {
            firstname: "",
            signatures: 0
        }
    }

    componentDidMount() {
        this.setState({firstname: localStorage.getItem('firstname') || "Lucas" });

        fetch('https://global-petition-counter-v2.appspot.com/api/campaign/protect-oceans-2019')
            .then(response => response.json())
            .then(data => {
            let count = data.unique_count.toString().replace(/(\d{3})/g, '$1 ').replace(/(^\s+|\s+$)/,' ');
            
            this.setState({signatures: count})
        });
    }

    handleClick = () => {
        this.props.history.push('/home/');
    }

    render() {
        return (
            <section className="gp_profil">
                <button className="gp_defi_jour--close" onClick={this.handleClick}></button>

                <div className="gp_profil--header">
                    <AvatarProfil />

                    <h2 className="gp_title">{this.state.firstname}</h2>

                    <div className="gp_profil_recap">
                        <span className="gp_icon gp_icon-check"></span>

                        <span className="gp_profil_recap--title">1 défi réussi
                            <span className="gp_profil_recap--sub-title">sur 30 à réaliser</span>
                        </span>
                    </div>

                    <div className="gp_profil_recap">
                        <span className="gp_icon gp_icon-horloge"></span>

                        <span className="gp_profil_recap--title">1 jour de participation
                            <span className="gp_profil_recap--sub-title">qui fait la différence pour les océans</span>
                        </span>
                    </div>
                </div>

                <div className="gp_profil--content">
                    <div className="gp_profil_signatures--wrapper">
                        <span className="gp_icon gp_icon--user-blue gp_icon--user-blue-big"></span>

                        <div className="gp_profil_signatures">
                            <span className="gp_profil_signatures--number">{this.state.signatures}<span className="gp_title"> signatures</span></span>

                            <span className="gp_sub-title">et chacune d’entre elles compte !</span>

                            <button className="gp_link">A propos du traité ></button>
                        </div>
                    </div>

                    <button className="gp_btn gp_btn--primary">Je signe</button>
                </div>
            </section>
        );
    }
}