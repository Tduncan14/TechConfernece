"use client";

import React from "react";
import Image from "next/image";
import { Speaker } from "../Speakers/Speaker";
import "./Cardpopup.css";
import ScheduleCard from "../ScheduleCard/ScheduleCard";

interface CardpopupProps {
    speaker?: Speaker | null;
    bgColor?: string; // Optional: Pass down the dynamic color if available
    onClose?: () => void;
}

const Cardpopup: React.FC<CardpopupProps> = ({ speaker, bgColor = "#FFE6BA", onClose }) => {
    // Guard clause
    if (!speaker) return null;

    const { name, role, company, avatar, bio } = speaker;

    // Sanitize image path
    let imageSrc = avatar && avatar.trim() !== "" ? avatar.trim() : "/assets/images/default-avatar.png";
    if (!imageSrc.startsWith("/") && !imageSrc.startsWith("http://") && !imageSrc.startsWith("https://")) {
        imageSrc = `/${imageSrc}`;
    }

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>
                    &times;
                </button>

                <div className="ProfileMe">
                    {/* Layered background matching SpeakerList */}
                    <div
                        className="speaker-avatar-container"

                    >
                        <div style={{
                            backgroundColor: bgColor,
                            backgroundImage: `url('/assets/images/pattern-avatar-bg.svg')`
                        }}>
                            <Image
                                alt={`${name}'s avatar`}
                                src={imageSrc}
                                width={120}
                                height={120}
                                className="speaker-avatar"
                                unoptimized={imageSrc.startsWith('http')}
                            />
                        </div>

                        <div className="profileMain">
                            <h3>{name}</h3>
                            <p className="profileRole">{role}  @{company}</p>

                        </div>
                    </div>


                </div>

                <hr />

                <div className="profileBio">
                    <p>{bio}</p>
                </div>

                <hr />
                <div className="profileSchedule">
                    <h1>// TALK</h1>
                    <ScheduleCard />
                </div>
            </div>
        </div>
    );
};

export default Cardpopup;