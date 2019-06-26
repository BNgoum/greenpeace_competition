import React from "react";

import User from "../../assets/img/user.svg";

export default class Signatures extends React.Component {
    constructor() {
        super();
        this.state = {
            signatures: 0
        }
    }

    componentDidMount() {
        fetch('https://global-petition-counter-v2.appspot.com/api/campaign/protect-oceans-2019')
          .then(response => response.json())
          .then(data => {
            let count = data.unique_count.toString().replace(/(\d{3})/g, '$1 ').replace(/(^\s+|\s+$)/,' ');
            

            this.setState({signatures: count})
          });
      }

    render() {
        return (
            <section className="gp_defi_jour gp_defi_jour--signatures">
                <button className="gp_defi_jour--close"></button>

                <div className="gp_defi_jour--header">
                    <span className="gp_title">{this.state.signatures} <span className="gp_title--secondary">signatures</span></span>
                
                    <p className="gp_text">et chacune d’entre elles compte !</p>
                </div>

                <div className="gp_defi_jour--content">
                    <p className="gp_text">Aller, encore 30 petites secondes...</p>
                    <p className="gp_text">En signant la pétition, tu peux toi aussi faire bouger les choses pour sauver les océans...</p>
                </div>

                <button className="gp_btn gp_btn--primary">Je signe</button>
            </section>
        );
    }
}