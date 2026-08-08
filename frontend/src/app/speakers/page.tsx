"use client";

import React from "react";
import { usePathname } from "next/navigation";
import SpeakerList from "../components/Speakers/Speaker";
import "./speaker.css";

const SpeakersPage = () => {
    const pathName = usePathname();

    return (
        <main className="speakerPage">
            <h1 className="glowMe">// speakers</h1>

            <SpeakerList pathName={pathName} />
        </main>
    );
};

export default SpeakersPage;