"use client"

import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import './Header.css'
import { usePathname } from 'next/navigation'


type HeaderProps = {

    className?: string;
}

const Header = ({ className = "" }: HeaderProps) => {

    const pathName = usePathname()

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
                    <Link className={pathName === '/' ? "glowBorder" : 'button'} href="/">HOME </Link>
                    <Link className={pathName === '/schedule' ? "glowBorder" : 'button'} href="/schedule">SCHEDULE</Link>
                    <Link className={pathName === '/speakers' ? "glowBorder" : 'button'} href="/speakers">SPEAKERS</Link>

                </div>

            </div>


        </header>
    );
};

export default Header;