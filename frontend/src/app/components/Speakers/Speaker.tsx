import React from 'react'
import Card from '../Card/Card'
import './Speaker.css'
import data from '../../../data.json';

interface Speaker {
    id: string;
    name: string;
    role: string;
    company: string;
    avatar: string;
    bio: string;
    featured: boolean;
}

const SpeakerList: React.FC = () => {
    // Assert the imported JSON directly to our Speaker array type
    const dataSpeaker = ((data.speakers || []) as Speaker[]).slice(0, 8);

    return (
        <div className="speaker-grid">
            {dataSpeaker.map((speaker) => (
                <Card key={speaker.id} className={speaker.featured ? 'featured-card' : ''}>
                    <div className="speaker-header">
                        <img
                            src={speaker.avatar}
                            alt={speaker.name}
                            className="speaker-avatar"
                        />
                        <div>
                            <h3>{speaker.name}</h3>
                            <p className="speaker-title">{speaker.role} at {speaker.company}</p>
                        </div>
                    </div>
                    {/* <p className="speaker-bio">{speaker.bio}</p> */}
                    {/* {speaker.featured && <span className="badge">Featured Speaker</span>} */}
                </Card>
            ))}
        </div>
    );
}

export default SpeakerList;