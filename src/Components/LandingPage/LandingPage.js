import React from "react";

import StepReason from './Step_reason';

import LogoPTO from '../../assets/img/greenpeace_pto.svg';
import Logo from '../../assets/img/logo.svg';
import Pinguin from '../../assets/img/pinguin.svg';
import Turtle from '../../assets/img/turtle.svg';
import Bear from '../../assets/img/bear.svg';

export default class LandingPage extends React.Component {
    constructor() {
        super();
        this.state = { currentStep: 1 }
    }


    render() {
        return ( 
            <div className="gp_landing-page">
                <section className="gp_landing-page--top">
                    <img src={LogoPTO} alt="Logo Protect The Oceans" className="gp_landing-page--logo-pto" />
                    <img src={Logo} alt="Logo Greenpeace" className="gp_logo--large" />

                    <h1 className="gp_title"><span className="gp_title gp_title--strong gp_title--secondary">30</span> secondes pour protéger les océans</h1>
                    <p className="gp_text gp_text--space">Nous devons protéger de toute urgence les océans pour préserver leur biodiversité et lutter contre les changements climatiques. Pour y parvenir, les scientifiques ont un plan : il faut créer un réseau mondial de réserves marines qui protègerait au moins 30 % de la biodiversité des océans, d’ici à 2030.</p>
                
                    <div className="gp_landing-page--video"></div>

                    <button className="gp_btn gp_btn--secondary">Signer la pétition</button>
                </section>
                
                <section className="gp_landing-page--signatures">
                    <h2 className="gp_title"><span className="gp_title gp_title--secondary">700 000</span> personnes ont fait le grand saut</h2>
                    <p className="gp_text gp_text--space">Pour dire au gouvernement français de négocier un traité ambitieux à l’ONU, nous devons leur faire comprendre que nos océans méritent mieux.  C’est simple sans ton aide rien ne changera.</p>
                    <p className="gp_text gp_text--space">Tu veux agir ? Participe à la préservation des océans en relevant nos défis quoitidiens ou en relayant notre action et tout ça en seulement 30 secondes.</p>
                </section>

                <section className="gp_landing-page--defis">
                    <img src={Logo} alt="Logo Greenpeace" className="gp_logo--medium" />
                    <article className="gp_landing-page--defis-item"></article>
                </section>

                <section className="gp_landing-page--raisons">
                    <h2 className="gp_title"><span className="gp_title gp_title--secondary gp_title--full">3 bonnes raisons</span> de s'impliquer !</h2>

                    <StepReason stepNumber={1} urlAnimal={Turtle} alt="Illustration d'une tortue" title="Protéger les habitats et les espèces" text="Les océans c’est plus de 90 % de l’espace habitable sur la planète et ils abritent quelque 250 000 espèces connues ainsi que beaucoup d’autres qui ne sont pas encore répertoriées." />
                    <StepReason stepNumber={2} urlAnimal={Pinguin} alt="Illustration d'un pinguin" title="RESTAURER LA BIODIVERSITÉ" text="La perte de biodiversité signifie la perte de gènes et de molécules potentiellement précieuses pour la recherche médicale et l’industrie." />
                    <StepReason stepNumber={3} urlAnimal={Bear} alt="Illustration d'un ours" title="PRÉSERVER LES BIENS ET SERVICES" text="Les écosystèmes marins contribuent à l’éradication de la pauvreté, à la croissance économique durable, à la sécurité alimentaire, aux moyens de subsistance durables et au travail inclusif tout en atténuant les effets du changement climatique." />

                </section>
            </div>
            
        );
    }
}