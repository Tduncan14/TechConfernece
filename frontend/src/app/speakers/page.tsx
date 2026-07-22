"use client"
import React from 'react'
import SpeakerList from '../components/Speakers/Speaker'
import { usePathname } from 'next/navigation'
import './speaker.css'

const page = () => {

    const pathName = usePathname()


    return (
        <div className="speakerPage">
            <h1> // speakers</h1>

            <SpeakerList pathName={pathName} />

        </div>
    )
}

export default page
