import React from "react";

const AvatarProfil = () => {
    return (
        <div className="gp_avatar-profil">
            <span className="gp_avatar-profil--icon"></span>
            <span className="gp_avatar-profil--value">50 <span className="gp_text">points</span></span>

            <span className="gp_avatar-profil_progress"><span className="gp_avatar-profil_progress--active"></span></span>
        </div>
    );
}

export default AvatarProfil;