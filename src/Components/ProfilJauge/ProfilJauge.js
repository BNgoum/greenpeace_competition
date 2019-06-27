import React from "react";

const ProfilJauge = () => {
    return ( 
        <button className="gp_jauge">
            <span className="gp_jauge_points">0<span className="gp_jauge_points--text">points</span></span>

            <span className="gp_jauge_avatar"><span className="gp_jauge_avatar--icon"></span></span>

            <div className="gp_jauge_progress">
                <span className="gp_jauge_progress--active"></span>
            </div>
        </button>
    )
}

export default ProfilJauge