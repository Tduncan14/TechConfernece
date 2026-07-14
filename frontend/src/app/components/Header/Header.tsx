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
                    <button><Link href="/">Home </Link></button>
                    <button><Link href="/schedule">Schedule </Link></button>
                    <button><Link href="/speakers">Home </Link></button>

                </div>

            </div>


        </header>
    );
};

export default Header;