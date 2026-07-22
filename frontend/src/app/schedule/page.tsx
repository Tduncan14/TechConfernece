"use client"
import React from 'react'
import './schedule.css'
import ScheduleCard from '../components/ScheduleCard/ScheduleCard'

const page = () => {
    return (
        <div className="mainScheduleContainer">
            <h1> // Schedule</h1>

            <div className="buttonGallerySchedule">
                <ul>
                    <li className="box">DAY 01</li>
                    <li className="box">DAY 02</li>
                    <li className="box">DAY 03 </li>

                    <li className="circle">FRONTEND</li>
                    <li className="circle">PERFORMANCE</li>
                    <li className="circle">A11Y</li>
                    <li className="circleDash">MY SCHEDULE</li>
                    <li className="clear">Clear</li>


                </ul>

                <hr />


            </div>


            <div className="scheduleMainPage">
                <ScheduleCard />
                <ScheduleCard />
                <ScheduleCard />
                <ScheduleCard />
                <ScheduleCard />
                <ScheduleCard />
                <ScheduleCard />
                <ScheduleCard />

            </div>
        </div>






    )
}

export default page
