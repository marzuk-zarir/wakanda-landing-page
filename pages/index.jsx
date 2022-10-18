import Banner from '../components/Banner'
import Explore from '../components/Explore'
import Feature from '../components/Feature'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import SocialProof from '../components/SocialProof'
import Testimonial from '../components/Testimonial'
import Tutorial from '../components/Tutorial'

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <SocialProof />
            <Feature />
            <Tutorial />
            <Explore />
            <Testimonial />
            <Banner />
            <Footer />
        </>
    )
}
