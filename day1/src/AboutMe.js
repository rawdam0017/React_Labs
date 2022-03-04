function AboutMe() {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <h1>About me</h1>
                    </div>
                    <div className="col-md-8">
                        <p className='text-secondary my-3 h5'> 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolorem
                            laborum itaque. Perspiciatis in veniam illum deserunt, quos animi
                            maiores nisi officiis amet accusantium soluta a, excepturi vero
                            obcaecati nobis.
                        </p>
                        <a href="#App" className="btn btn-lg btn-outline-dark  my-3" download
                        >Download CV</a
                        >
                    </div>
                </div>
            </div>
        </section>
    )
}

 export default AboutMe;

