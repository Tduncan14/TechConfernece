import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import './Header.css'


type HeaderProps = {

    className?: string;
}

const Header = ({ className = "" }: HeaderProps) => {
    return (
        <header className="header ">
            <div className="headerContainer">
                <div className="left">
                    <Image
                        src="/assets/images/logo.svg"
                        alt="Logo"
                        width={225}
                        height={225}
                    />
                </div>

                <div className="rightMenu">
                    <button><Link href="/">HOME </Link></button>
                    <button><Link href="/schedule">SCHEDULE</Link></button>
                    <button><Link href="/speakers">SPEAKERS</Link></button>

                </div>

            </div>


        </header>
    );
};

export default Header;