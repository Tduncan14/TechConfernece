import React from 'react'
import Image from 'next/image'
import './Footer.css'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className="footer">

            <hr />

            <div className="footContainer">
                <div className="leftFooter">

                    <Image
                        src="/assets/images/logo.svg"
                        alt="Logo"
                        width={225}
                        height={225}
                    />

                    <div className="paraFooter">

                        <p>A three-day conference for engineers who build</p>
                        <p>the interfaces humans use every day</p>
                    </div>


                </div>

                <div className="rightFooter">
                    <div className="rightLeft gapMe">
                        <h1 className="glowMes">//   NAVIGATE</h1>

                        <Link href="/" >Home</Link>
                        <Link href="/schedule">Schedule</Link>
                        <Link href="/speakers">Speakers</Link>

                    </div>


                    <div className="leftRight gapMe">
                        <h1 className="glowMes">//   TRACKS</h1>
                        <Link href=""> Frontend</Link>
                        <Link href=""> Performance</Link>
                        <Link href="">Accessiblity</Link>
                        <Link href="">Tooling</Link>


                    </div>


                    <div className="leftRightEnd  ">
                        <h1 className="glowMes">//   VENUE</h1>
                        <Link href="" className="moveMe" > Pier 70</Link>
                        <Link href="" > San Franciso, CA</Link>
                        <Link href="" >Nov 15-17, 2026</Link>



                    </div>


                </div>
            </div>

            <hr />


            <div className="bottomFooter">
                <h1>&copy; 2026 DEVHORIZON. ALL RIGHTS RESERVES </h1>





                <button> BACK TO TOP  </button>
            </div>



        </div>
    )
}

export default Footer
