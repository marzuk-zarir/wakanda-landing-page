import Button from './common/Button'

export default function Hero() {
    return (
        <section id="home">
            <div className="container">
                <div className="hero">
                    <div className="content">
                        <h1>Recruit top talented freelancer for your business</h1>
                        <p>
                            Connect you to thoudsands of talented freelancer from any industry. You
                            can have the best people in just few simple steps.
                        </p>
                        <Button>Get Started</Button>
                    </div>
                    <div className="image">
                        <img src="/assets/hero-img.png" alt="Handsome Man" />
                    </div>
                </div>
            </div>
        </section>
    )
}
