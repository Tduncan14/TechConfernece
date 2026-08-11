"use client";

import React from "react";
import Image from "next/image";
import { Speaker } from "../Speakers/Speaker";
import ScheduleCard from "../ScheduleCard/ScheduleCard";
import "./Cardpopup.css";

interface CardpopupProps {
    speaker?: Speaker | null;
    bgColor?: string;
    onClose?: () => void;
}

const colorToTitle: Record<string, string> = {
    "#ffe6ba": "Frontend",
    "rgb(255,230,186)": "Frontend",

    "#b5e9fc": "Accessibility",
    "rgb(181,233,252)": "Accessibility",

    "#fec9c3": "Performance",
    "rgb(254,201,195)": "Performance",

    "#ccc4fd": "Tooling",
    "rgb(204,196,253)": "Tooling",
};

function normalizeColor(color: string) {
    return color.toLowerCase().replace(/\s/g, "");
}

const Cardpopup: React.FC<CardpopupProps> = ({
    speaker,
    bgColor = "#FFE6BA",
    onClose,
}) => {
    if (!speaker) return null;

    const { name, role, company, avatar, bio } = speaker;

    const normalizedBgColor = normalizeColor(bgColor);

    const scheduleTitle =
        colorToTitle[normalizedBgColor] ?? "Frontend";

    let imageSrc =
        avatar?.trim() || "/assets/images/default-avatar.png";

    if (
        !imageSrc.startsWith("/") &&
        !imageSrc.startsWith("http://") &&
        !imageSrc.startsWith("https://")
    ) {
        imageSrc = `/${imageSrc}`;
    }

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div
                className="popup-content"
                onClick={(event) => event.stopPropagation()}
            >
                <button
                    type="button"
                    className="close-btn"
                    onClick={onClose}
                    aria-label="Close popup"
                >
                    &times;
                </button>

                <div className="ProfileMe">
                    <div className="speaker-avatar-container">
                        <div
                            style={{
                                backgroundColor: bgColor,
                                backgroundImage:
                                    "url('/assets/images/pattern-avatar-bg.svg')",
                            }}
                        >
                            <Image
                                alt={`${name}'s avatar`}
                                src={imageSrc}
                                width={120}
                                height={120}
                                className="speaker-avatar"
                                unoptimized={imageSrc.startsWith("http")}
                            />
                        </div>

                        <div className="profileMain">
                            <h1 >{name}</h1>

                            <p className="profileRole">
                                {role} @{company}
                            </p>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="profileBio">
                    <p>{bio}</p>
                </div>

                <hr />

                <div className="profileSchedule">
                    <h1 className="titleTalk">// TALK</h1>

                    <ScheduleCard
                        title={scheduleTitle}
                        h1Title="Designing accessible audio experiences"
                        h2Title={`${name.toUpperCase()} // ${company.toUpperCase()}`}
                        time1="11:00"
                        time2="12:00"
                        day="DAY 2"
                    />
                </div>
            </div>
        </div>
    );
};

export default Cardpopup;