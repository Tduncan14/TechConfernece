"use client"


import React from 'react'
import './style.css'
import Link from 'next/link'
import Image from 'next/image'
import SpeakerList from './components/Speakers/Speaker'
import ScheduleCard from './components/ScheduleCard/ScheduleCard'
import { usePathname } from 'next/navigation'

export default function Page() {

  const pathName = usePathname()


  return (
    <div className="homeContainer">

      <div className="codeMeetSMachine">

        <div className="machine">

          <div className="machineLeft">

            <h1> where code meets the machine_</h1>


            <h1 className="invertCool"> HORIZON</h1>



            <div className="machineFooter">
              <hr />
              <div className="machineDates">
                <h1>Nov 15-17 , 2026</h1>


                <h1> PIER 70, SF</h1>
              </div>
            </div>
          </div>

          <div className="machineRight">

            <div className="machineRightContent">

              <h2 className=""> // FEATURED KEYNOTE</h2>

              <h1>elena vasquez</h1>

              <h2>PRINCIPAL FRONTEND ENGINEER</h2>
              <h2>@BYTECRAFT</h2>




              <h1>THE NEXT FRONTIER OF WEB DEVELOPMENT</h1>
              <h2>NOV 15 / 9:00 / ROOM A</h2>


              <button> <Link href="#">VIEW TALK </Link></button>
            </div>

            <div className="machineRightImage">

              <Image alt="image" src="/assets/images/avatar-elena-vasquez.webp" height={500} width={500} />

            </div>

          </div>


        </div>



      </div>

      {/* Feature speakers */}

      <div className="speakerhomeContainer">

        <div className="upperSpeaker">

          {/* beginninger pf tracks */}

          <div className="trackSpeaker">
            <h2 className="headertwo glowTwo"> // TRACKS </h2>


            <div className="performancesTrack">

              <div className="">
                <h1 style={{ color: "#FFE6BA" }}>frontend</h1>

                <p>BUILDING MODERN INTERFACES</p>
                <p>FOR THE WEB</p>
              </div>
              <div className="">
                <h1 style={{ color: "#FEC9C3" }}>performance</h1>
                <p>MAKE EVERY</p>
                <p>MILLISECOND COUNT</p>
              </div>

              <div className="">
                <h1 style={{ color: "#CCC4FD" }}>accessiblity</h1>
                <p>BUILDING INCLUSIVE</p>
                <p>EXPERIENCES FOR EVERYONE</p>
              </div>
              <div className="">
                <h1 style={{ color: "#" }}>tooling</h1>
                <p>LEVEL UP YOUR</p>
                <p>DEVELOPER WORKFLOW</p>
              </div>

            </div>
          </div>





        </div>

        {/* beginning of bottom of speaker */}



        <div className="bottomSpeaker">

          <h2 className="headertwo glowTwo">// FEATURED_SPEAKERS</h2>

          <div className="speakerGallery">
            <SpeakerList pathName={pathName} />
          </div>


          <button className="speakerButton"> <Link href="/speakers"> VIEW ALL SPEAKERS </Link></button>
        </div>

      </div>
      {/* end of the speakers */}


      {/* sheduleHighlights */}

      <div className="schedulehomeSchedule">
        <div className="titleSchedule">
          <h1 className="glowTwo ">//   SCHEDULE_HIGHLIGHTS</h1>
        </div>
        {/* 
         title: string;
    h1Title: string;
    h2Title: string;
    time1: string;
    time2: string;
    day: string; */}

        <div className="scheduleContainerGallery">
          <ScheduleCard title={"PERFORMANCE"} h1Title={"video compression for the web: the middle-out approach"} h2Title='DINESH CHUGTAI // PIED PIPER' time1="11:00" time2="12:00" day="DAY 1" />
          <ScheduleCard title={"ACCESIBLITY"} h1Title={"desigining accessible audio experiences"} h2Title="FATIMA AL-RASHID // SPECTRA" time1="11:00" time2='12:00' day="DAY 2" />          <ScheduleCard title={"FRONTEND"} h1Title={"css container queries in production"} h2Title="MEI-LIN ZHANG // ROAMLY" time1="13:00" time2='14:00' day="DAY 1" />

          <ScheduleCard title={"TOOLING"} h1Title={"deploy preview enviroments that scale"} h2Title="TOM KOWALSKI // NIMBUS" time1="12:00" time2="13:00" day="DAY 3" />


          <button className="
          "><Link href="/schedule">VIEW FULL SCHEDULE</Link> </button>


        </div>



      </div>


    </div>
  )
}
