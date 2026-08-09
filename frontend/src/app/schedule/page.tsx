"use client"
import React from 'react'
import './schedule.css'
import ScheduleCard from '../components/ScheduleCard/ScheduleCard'

const page = () => {
    return (
        <div className="mainScheduleContainer">
            <h1 className="glowMe"> // Schedule</h1>

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
                <ScheduleCard title={"KEYNOTE"} h1Title="the next frontier of web development" h2Title="ELENA VASQUEZ // BYTECRAFT" time1="9:00" time2='10:00' />
                <ScheduleCard title={"PERFORMANCE"} h1Title="profiling react render at 120fps" h2Title="RYAN 0'SULLIVAN // COBALT" time1="10:00" time2='11:00' />
                <ScheduleCard title={"PERFORMANCE"} h1Title="video compression for the web: the middle-out approach" h2Title="DINESH CHUGTAI // PIED PIPPER" time1="11:00" time2="12:00" />
                <ScheduleCard title={"TOOLING"} h1Title="monorepos at scale: lessons from 500 packages" h2Title="JAMES OKONKWO // CARTWELL" time1="12:00" time2='13:00' />
                <ScheduleCard title={"FRONTEND"} h1Title="css container queries in production" h2Title="MEI-LIN ZHANG // ROAMLY" time1="9:00" time2='10:00' />
                <ScheduleCard title={"ACCESSIBILITY"} h1Title="aria patterns you're probably using wrong" h2Title="PRIYA SHARMA// COBALT" time1="12:00" time2='14:00' />
                <ScheduleCard title={"TOOLING"} h1Title="ai-powered developer tools:hype vs. reality" h2Title="KWAME ASANTE // TRACKWISE" time1="16:00" time2='1:00' />


            </div>
        </div>






    )
}

export default page
