"use client";

import React, { useEffect, useId, useState } from "react";
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

const colors = [
    "rgb(255, 230, 186)",
    "rgb(254, 201, 195)",
    "rgb(255, 128, 128)",
    "rgb(181, 233, 252)",
];

function shuffleColors() {
    const shuffled = [...colors];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[randomIndex]] = [
            shuffled[randomIndex],
            shuffled[i],
        ];
    }

    return shuffled;
}

// Shared by all ScheduleCard components
let availableColors: string[] = [];
const assignedColors = new Map<string, string>();

function getNextColor(cardId: string) {
    // Keep the same color if React renders the card again
    const existingColor = assignedColors.get(cardId);

    if (existingColor) {
        return existingColor;
    }

    // All four colors were used, so create a new random order
    if (availableColors.length === 0) {
        availableColors = shuffleColors();
    }

    const nextColor = availableColors.shift()!;
    assignedColors.set(cardId, nextColor);

    return nextColor;
}

function ScheduleCard({
    title,
    h1Title,
    h2Title,
    time1,
    time2,
    day,
}: ScheduleCardProps) {
    const cardId = useId();
    const [backgroundColor, setBackgroundColor] = useState(
        "rgb(255, 255, 255)"

    );

    useEffect(() => {
        setBackgroundColor(getNextColor(cardId));
    }, [cardId]);

    return (
        <article
            className="scheduleCard"
            style={{ backgroundColor }}
        >
            <div className="titleScheduleWord">
                <h1 className="scheduleCardLabel" style={{ color: backgroundColor }}>{title}</h1>
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