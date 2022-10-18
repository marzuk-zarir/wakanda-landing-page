import Link from 'next/link'
import Button from '../common/Button'
import { FaTimes } from 'react-icons/fa'
import { useEffect } from 'react'

export default function MobileNav({ setShowMobileNav }) {
    useEffect(() => {
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [])

    return (
        <nav id="mobile-nav-overlay">
            <div className="close-icon" onClick={() => setShowMobileNav(false)}>
                <FaTimes />
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
        </nav>
    )
}
