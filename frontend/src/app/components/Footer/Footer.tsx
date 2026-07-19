import React from 'react'
import Image from 'next/image'
import './Footer.css'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className="footer">


            <div className="footContainer">
                <div className="leftFooter">

                    <Image
                        src="/assets/images/logo.svg"
                        alt="Logo"
                        width={225}
                        height={225}
                    />

                    <p>A three-day conference for engineers who build</p>
                    <p>the interfaces humans use every day</p>


                </div>

                <div className="rightFooter">
                    <div className="rightLeft">
                        <h1>// NAVIGATE</h1>

                        <Link href="/" >Home</Link>
                        <Link href="/schedule">Schedule</Link>
                        <Link href="/speakers">Speakers</Link>

                    </div>


                    <div className="leftRight">
                        <h1>// TRACKS</h1>
                        <Link href=""> Frontend</Link>
                        <Link href=""> Performance</Link>
                        <Link href="">Accessiblity</Link>
                        <Link href="">Tooling</Link>


                    </div>

                </div>
            </div>



        </div>
    )
}

export default Footer
