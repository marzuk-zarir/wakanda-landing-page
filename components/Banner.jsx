import Button from './common/Button'

export default function Banner() {
    return (
        <section id="banner">
            <div className="container">
                <div className="banner">
                    <div className="image">
                        <img src="/assets/banner-women.png" alt="Banner" />
                    </div>
                    <div className="content">
                        <p>WHAT ARE YOU WAITING FOR?</p>
                        <h6>Find the talent to get your business growing</h6>
                        <Button alt>Get Started</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
