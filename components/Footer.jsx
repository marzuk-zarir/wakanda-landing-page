/* eslint-disable react/jsx-no-target-blank */
import { FaDribbble, FaFacebook, FaPaperPlane, FaPlane, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function Footer() {
    return (
        <section id="footer">
            <div className="container">
                <div className="footer">
                    <div className="section-1">
                        <img src="/assets/footer-logo.svg" alt="Wakanda" />
                        <div className="social-icons">
                            <a href="https://www.facebook.com/" target="_blank">
                                <FaFacebook />
                            </a>
                            <a href="https://www.dribble.com/" target="_blank">
                                <FaDribbble />
                            </a>
                            <a href="https://www.twitter.com/" target="_blank">
                                <FaTwitter />
                            </a>
                            <a href="https://www.youtube.com/" target="_blank">
                                <FaYoutube />
                            </a>
                        </div>
                        <p>Copyright © 2022 Wakanda. All rights reserved</p>
                    </div>
                    <div className="section-2">
                        <h6>Company</h6>
                        <ul>
                            <li>
                                <a href="#">About us</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">Contact us</a>
                            </li>
                            <li>
                                <a href="#">How it works</a>
                            </li>
                            <li>
                                <a href="#">For freelancers</a>
                            </li>
                        </ul>
                    </div>
                    <div className="section-3">
                        <h6>Support</h6>
                        <ul>
                            <li>
                                <a href="#">Help center</a>
                            </li>
                            <li>
                                <a href="#">Terms of service</a>
                            </li>
                            <li>
                                <a href="#">Legal</a>
                            </li>
                            <li>
                                <a href="#">Privacy policy</a>
                            </li>
                            <li>
                                <a href="#">Status</a>
                            </li>
                        </ul>
                    </div>
                    <div className="section-4">
                        <h6>Subscribe to our newsletter</h6>
                        <form className="newsletter">
                            <input type="text" placeholder="Your email address" />
                            <input type="submit" value="" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
