"use client"
import React, { useState } from 'react'
import Card from '../Card/Card'
import Cardpopup from '../Cardpopup/Cardpopup'
import './Speaker.css'
import data from '../../../data.json'

export interface Speaker {
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
    // 1. Correct TypeScript union generic syntax: <Speaker | null>
    const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

    const dataSpeaker = pathName === "/"
        ? ((data.speakers || []) as Speaker[]).filter((speaker) => speaker.featured === true).slice(0, 8)
        : ((data.speakers || []) as Speaker[]);

    const avatarBgColors = [
        '#FFE6BA',
        '#B5E9FC',
        '#FEC9C3',
        '#BBD8FF',
        '#CCC4FD',
    ];

    return (
        <div className="speaker-grid">
            {dataSpeaker.map((speaker, index) => {
                const bgColor = avatarBgColors[index % avatarBgColors.length];

                return (
                    /* 2. Fixed broken Card JSX attributes */
                    <Card
                        key={speaker.id}
                        speaker={speaker}
                        className={speaker.featured ? 'featured-card' : 'cardSpeaker'}
                        onClick={() => setSelectedSpeaker(speaker)}
                    >
                        <div className="speaker-header">
                            <div
                                className="speaker-avatar-container"
                                style={{
                                    backgroundColor: bgColor,
                                    backgroundImage: `url('/assets/images/pattern-avatar-bg.svg')`
                                }}
                            >
                                <img
                                    src={speaker.avatar}
                                    alt={speaker.name}
                                    className="speaker-avatar"
                                />
                            </div>
                            <div className="speaker-info">
                                <h3 className="Speakerbigname">{speaker.name}</h3>
                                <p className="speaker-title">{speaker.role}  @{speaker.company}</p>

                                <hr />
                                <p className="colorBioSpeaker lightGreen">{speaker.bio.slice(0, 55)}...</p>
                            </div>
                        </div>
                    </Card>
                );
            })}

            {/* 3. Fixed broken Cardpopup JSX attributes */}
            {selectedSpeaker && (
                <Cardpopup
                    speaker={selectedSpeaker}
                    onClose={() => setSelectedSpeaker(null)}
                />
            )}
        </div>
    );
}

export default SpeakerList;