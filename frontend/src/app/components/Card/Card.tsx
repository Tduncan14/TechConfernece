import React from 'react';
import { Speaker } from '../Speakers/Speaker';
import './Card.css';

interface CardProps {
    children: React.ReactNode;
    speaker?: Speaker;
    className?: string;
    onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className = '', onClick }) => {
    return (
        /* Handles clicking and CSS container styling cleanly */
        <div className={`card-container ${className}`} onClick={onClick}>
            {children}
        </div>
    );
};

export default Card;