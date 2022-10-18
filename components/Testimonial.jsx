import { FaStar } from 'react-icons/fa'

const testimonials = [
    {
        name: 'Cara Bedford',
        avatar: '/assets/testimonial/avatar-1.png',
        description:
            "I have been using Wakanda for quite some time now and I have to say it has been the best freelance hiring platform that I've used. The quality of freelancers on this site is very high and they're totally reliable. I would highly recommend it!"
    },
    {
        name: 'Robert Fox',
        avatar: '/assets/testimonial/avatar-2.png',
        description:
            'I’m so happy because the freelance talent we work with are more productive than we have ever thought. Recommend for people who want to find professional freelancer on this platform.'
    },
    {
        name: 'Albert Flores',
        avatar: '/assets/testimonial/avatar-3.png',
        description:
            'I am happy to say that I have hired a couple of freelancers through Wakanda and they are high-quality ones. Working with them is not just easier; it has also been more effective. Having found a great freelance team, I cannot imagine switching to any other hiring platform.'
    },
    {
        name: 'Kathryn Murphy',
        avatar: '/assets/testimonial/avatar-4.png',
        description:
            "One of the best things about Wakanda is that it really simplifies the process of finding and hiring people. The quality is good as well, every freelancer I've hired has been high-quality and professional. I would recommend this to anyone who needs a freelancer."
    },
    {
        name: 'Esther Howard',
        avatar: '/assets/testimonial/avatar-5.png',
        description:
            'have used a lot of freelance hiring platforms, but none compare to Wakanda. The quality of freelancers that I can find here is unmatched and the service is top-notch. The customer service is also excellent, which cannot be said for my previous experiences in using other apps. I would highly recommend this product for anyone looking to hire a freelancer.'
    },
    {
        name: 'Eleanor Pena',
        avatar: '/assets/testimonial/avatar-6.png',
        description:
            "I have used a number of different freelance hiring platforms and none come close to Wakanda. The quality of the freelancers on here is top notch and it's easy to browse through the listings. I've been using it for six months now and I've found my perfect freelancer without any regrets whatsoever."
    }
]

export default function Testimonial() {
    return (
        <section id="testimonial" className="testimonial">
            <div className="container">
                <p className="text">TESTIMONIAL</p>
                <h5>See what they’re saying about us</h5>
                <div className="wrapper">
                    {testimonials.map(({ name, avatar, description }) => (
                        <div className="card" key={name}>
                            <div className="header">
                                <img src={avatar} alt={name} />
                                <div className="user-info">
                                    <p>{name}</p>
                                    <div>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                </div>
                            </div>
                            <div className="review">
                                <p>{description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
