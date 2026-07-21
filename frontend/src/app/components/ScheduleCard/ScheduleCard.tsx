"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import './scheduleCard.css'


interface ScheduleCardProps {
    title: string;
    h1Title: string;
    h2Title: string;
    time1: string;
    time2: string;
    day: string
}


function ScheduleCard({
    title, h1Title, h2Title, time1, time2, day
}: ScheduleCardProps) {
    return (
        <article className="scheduleCard">

            <div className="titleScheduleWord">
                <h1 className="scheduleCardLabel"> PERFORMANCE</h1>
            </div>

            <div className="mainScheduleContent">
                <h1>video compression for the web: the middle-out approach</h1>
                <h3>DINESH CHUGTAI // PIED PIPER</h3>
                <button> + SHOW DETAILS </button>
            </div>


            <div className="scheduleCardDetails">
                <span>11:00</span>
                <span>12:00</span>
                <Image alt="barcode" src="/assets/images/pattern-barcode.svg" height={100} width={100} />
                <span>DAY 1</span>
            </div>
        </article>
    )
}

export default ScheduleCard