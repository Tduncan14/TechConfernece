import React from 'react'
import './Card.css'

// define the props for the card 

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
    return (
        <div className={`card-container ${className}`}>
            {children}
        </div>
    )
}

export default Card
