"use client"
import React from 'react'
import SpeakerList from '../components/Speakers/Speaker'
import { usePathname } from 'next/navigation'

const page = () => {

    const pathName = usePathname()


    return (
        <div>
            <h1>speakers</h1>

            <SpeakerList pathName={pathName} />

        </div>
    )
}

export default page
