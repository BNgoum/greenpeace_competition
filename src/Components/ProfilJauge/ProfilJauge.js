import React from "react";
// onClick={() => this.props.history.push('/profil/')}

const ProfilJauge = props => {
    return ( 
        <button className="gp_jauge" onClick={() => props.history.push('/profil/')}>
            <span className="gp_jauge_points">{ (props.isRegister !== "") ? 50 : 0 }<span className="gp_jauge_points--text">points</span></span>

            <span className="gp_jauge_avatar"><span className="gp_jauge_avatar--icon"></span></span>

            <div className="gp_jauge_progress">
                <span className={"gp_jauge_progress--active" + (props.isRegister !== "" ? " is-register" : "") }></span>
            </div>
        </button>
    )
}

export default ProfilJauge