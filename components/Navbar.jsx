import Link from 'next/link'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import Button from './common/Button'
import MobileNav from './partials/MobileNav'

export default function Navbar() {
    const [showMobileNav, setShowMobileNav] = useState(false)

    return (
        <header>
            <div className="container">
                <nav className="navbar">
                    <div className="logo">
                        <Link href="/">
                            <img src="/assets/logo.svg" alt="Wakanda" />
                        </Link>
                    </div>
                    <div className="menu">
                        <ul>
                            <li>
                                <Link href="/#home">Home</Link>
                            </li>
                            <li>
                                <Link href="/#about">About us</Link>
                            </li>
                            <li>
                                <Link href="/#how-it-works">How it works</Link>
                            </li>
                            <li>
                                <Link href="/#for-freelancer">For Freelancer</Link>
                            </li>
                        </ul>
                        <Button>Get Started</Button>
                    </div>
                    <div className="mobile-nav">
                        <button onClick={() => setShowMobileNav(true)}>
                            <FaBars />
                        </button>
                    </div>
                </nav>
            </div>
            {showMobileNav && <MobileNav setShowMobileNav={setShowMobileNav} />}
        </header>
    )
}
