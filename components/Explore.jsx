import Button from './common/Button'

export default function Explore() {
    return (
        <section id="explore">
            <div className="container">
                <div className="explore">
                    <div className="content">
                        <h4>Explore and hire talent from our platform</h4>
                        <p>
                            We've got experts for every industry - all under one roof! You can find
                            everything from WordPress developers to Graphic designers to copywriters
                            and many more at Wakanda.
                        </p>
                        <Button>Explore Now</Button>
                    </div>
                    <div className="image">
                        <img src="/assets/explore-guy.png" alt="Explore" />
                    </div>
                </div>
            </div>
        </section>
    )
}
