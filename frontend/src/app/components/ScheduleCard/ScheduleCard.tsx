"use client";

import React from "react";
import Image from "next/image";
import "./scheduleCard.css";

interface ScheduleCardProps {
    title: string;
    h1Title: string;
    h2Title: string;
    time1: string;
    time2: string;
    day: string;
}

const backgroundColors: Record<string, string> = {
    keynote: "rgb(181, 233, 252)",
    accessibility: "rgb(181, 233, 252)",
    tooling: "rgb(204, 196, 253)",
    performance: "rgb(254, 201, 195)",
    frontend: "#ffe6ba",
};

function ScheduleCard({
    title,
    h1Title,
    h2Title,
    time1,
    time2,
    day,
}: ScheduleCardProps) {
    const backgroundColor =
        backgroundColors[title.toLowerCase()] ?? "rgb(255, 255, 255)";

    return (
        <article
            className="scheduleCard"
            style={{ backgroundColor }}
        >
            <div className="titleScheduleWord">
                <h1 className="scheduleCardLabel">{title}</h1>
            </div>

            <div className="mainScheduleContent">
                <h1>{h1Title}</h1>
                <h3>{h2Title}</h3>
                <button type="button">+ SHOW DETAILS</button>
            </div>

            <div className="scheduleCardDetails">
                <span>{time1}</span>
                <span>{time2}</span>

                <Image
                    alt="Barcode"
                    src="/assets/images/pattern-barcode.svg"
                    height={100}
                    width={100}
                />

                <span>{day}</span>
            </div>
        </article>
    );
}

export default ScheduleCard;