"use client"
import React from 'react'
import Card from '../Card/Card'
import './Speaker.css'
import data from '../../../data.json';
import { usePathname } from 'next/navigation';

interface Speaker {
    id: string;
    name: string;
    role: string;
    company: string;
    avatar: string;
    bio: string;
    featured: boolean;
}

interface SpeakerListProps {
    pathName: string;
}



const SpeakerList: React.FC<SpeakerListProps> = ({ pathName }) => {




    const dataSpeaker = pathName === "/" ? ((data.speakers || []) as Speaker[])
        .filter((speaker) => speaker.featured === true)
        .slice(0, 8) : (data.speakers || [])

    const avatarBgColors = [
        '#FFE6BA', // DevHorizon Track Orange
        '#B5E9FC', // DevHorizon Track Blue
        '#FEC9C3', // DevHorizon Track Red
        '#BBD8FF', // DevHorizon Track Purple-Blue
        '#CCC4FD', // DevHorizon Track Purple
    ];

    return (
        <div className="speaker-grid">
            {dataSpeaker.map((speaker, index) => {
                // Assign a color sequentially based on the array index
                const bgColor = avatarBgColors[index % avatarBgColors.length];

                return (
                    <Card key={speaker.id} className={speaker.featured ? 'featured-card ' : 'cardSpeaker'}>
                        <div className="speaker-header">
                            {/* Layered CSS Background: SVG Pattern on top, solid dynamic color underneath */}
                            <div
                                className="speaker-avatar-container"
                                style={{
                                    backgroundColor: bgColor,
                                    backgroundImage: `url('/assets/images/pattern-avatar-bg.svg')` // Update this path to where your SVG is stored (e.g. /public or your assets folder)
                                }}
                            >
                                <img
                                    src={speaker.avatar}
                                    alt={speaker.name}
                                    className="speaker-avatar"
                                />
                            </div>
                            <div className="speaker-info">
                                <h3>{speaker.name}</h3>
                                <p className="speaker-title">{speaker.role}</p>
                                <p>@{speaker.company}</p>
                                <hr />

                                <p className="colorBioSpeaker">{speaker.bio.slice(0, 55)}...</p>
                            </div>
                        </div>
                    </Card>
                );
            })}
        </div>
    );
}

export default SpeakerList;