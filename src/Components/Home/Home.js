import React from "react";
import SwipeableViews from 'react-swipeable-views';

import ProfilJauge from "../ProfilJauge/ProfilJauge";
import DefiUnlock from "../Defi/DefiUnlock";

import Logo from "../../assets/img/logo.svg";

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = { 
            firstname: "",
            email: "",
            isOpen: false
        }
    }

    componentDidMount() {
        this.setState({
            firstname: localStorage.getItem('firstname') || "Lucas",
            email: localStorage.getItem('email') || "lucas.delamer@gmail.com"
        })
    }

    handleIsOpen = () => {
        this.setState({
            isOpen: true
        })
    }

    render() {
        const { firstname } = this.state;
        return (
            <section className="gp_home">
                <section className="gp_home_header">
                    <img src={Logo} alt="Logo Greenpeace" className="gp_logo--mini" />
                    <ProfilJauge />
                </section>

                <section className="gp_home_content">
                    <h1 className="gp_title">Hello {firstname}</h1>
                    <p className="gp_text">Prêt pour le défi du jour ?</p>
                </section>

                <SwipeableViews>
                    <DefiUnlock isLock={false} numberDefi={1} handleIsOpen={this.handleIsOpen} />
                    <DefiUnlock isLock={true} numberDefi={2} />
                    <DefiUnlock isLock={true} numberDefi={3} />
                    <DefiUnlock isLock={true} numberDefi={2} />
                </SwipeableViews>

                {/* <DefiUnlock isLock={false} numberDefi={1} isOpen={true} /> */}
                <span className={"gp_home_bg-open" + (this.state.isOpen ? " gp_home_bg-open-animate" : "")}></span>
            </section>
        );
    }
}