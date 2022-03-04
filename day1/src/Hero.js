import './Hero.css'

function Hero() {
    return (
        <section class="hero" id="hero">
            <div className="container">
                <div className="row align-items-center text-center text-white text-md-left p-5">
                    <div className="col-md-6">
                        <h3>Rawda Mohamed</h3>
                        <h4>Web Developer & Designer</h4>
                        <a href='#hero' className="btn btn-lg btn-outline-light text-white my-3">Contact Me</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
