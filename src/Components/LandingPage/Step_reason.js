import React from "react";

const StepReason = (props) => {
    const { stepNumber, urlAnimal, altAnimal, title, text } = props;
    return (
        <article className={"gp_landing-page--raison gp_landing-page--raison-step" + stepNumber}>
            <span className="gp_landing-page--step-number">{props.stepNumber}</span>
            <img src={urlAnimal} alt={altAnimal} className="gp_landing-page--raison-animal" />
            <h3 className="gp_title">{title}</h3>
            <p className="gp_text gp_text--space">{text}</p>
        </article>
    )
}

export default StepReason;
