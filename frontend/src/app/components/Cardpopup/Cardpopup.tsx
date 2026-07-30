"use client";

import React from "react";
import Image from "next/image";
import { Speaker } from "../Speakers/Speaker";
import "./Cardpopup.css";

interface CardpopupProps {
    speaker?: Speaker | null;
    onClose?: () => void;
}

const Cardpopup: React.FC<CardpopupProps> = ({ speaker, onClose }) => {
    // Guard clause: Prevents rendering empty elements if speaker prop is missing
    if (!speaker) return null;

    // Proper destructuring directly from the speaker object
    const { name, role, company, avatar, bio } = speaker;

    return (
        // Backdrop overlay: Clicking outside closes the modal
        <div className="popup-overlay" onClick={onClose}>
            {/* stopPropagation prevents clicks inside the card from closing the modal */}
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>
                    &times;
                </button>

                <div className="ProfileMe">
                    <div className="profilePic">
                        {/* Populated Next.js Image component with valid src */}
                        {/* <Image "/assets/images/default-avatar.png"} alt="{`${name}'s" height="{100}" picture`} profile src="{avatar" width="{100}" ||/> */}
                    </div>

                    <div className="profileMain">
                        <h3>{name}</h3>
                        <p className="profileRole">{role}</p>
                        <p className="profileCompany">@{company}</p>
                    </div>
                </div>

                <div className="profileBio">
                    <p>{bio}</p>
                </div>
            </div>
        </div>
    );
};

export default Cardpopup;