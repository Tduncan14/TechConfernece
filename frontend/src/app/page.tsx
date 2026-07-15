import React from 'react'
import './style.css'
import Link from 'next/link'
import Image from 'next/image'
import SpeakerList from './components/Speakers/Speaker'

export default function page() {
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

              <h2> // FEATURED KEYNOTE</h2>

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
            <h2 className="headertwo"> // TRACKS </h2>


            <div className="performancesTrack">

              <div className="">
                <h1>frontend</h1>

                <p>BUILDING MODERN INTERFACES</p>
                <p>FOR THE WEB</p>
              </div>
              <div className="">
                <h1>performance</h1>
                <p>MAKE EVERY</p>
                <p>MILLISECOND COUNT</p>
              </div>

              <div className="">
                <h1>accessiblity</h1>
                <p>BUILDING INCLUSIVE</p>
                <p>EXPERIENCES FOR EVERYONE</p>
              </div>
              <div className="">
                <h1>tooling</h1>
                <p>LEVEL UP YOUR</p>
                <p>DEVELOPER WORKFLOW</p>
              </div>

            </div>
          </div>





        </div>

        {/* beginning of bottom of speaker */}



        <div className="bottomSpeaker">

          <h2>// FEATURED_SPEAKERS</h2>

          <div className="speakerGallery">
            <SpeakerList />
          </div>

        </div>

      </div>
      {/* end of the speakers */}


      {/* sheduleHighlights */}

      <div className="schedulehomeSchedule">


      </div>


    </div>
  )
}
