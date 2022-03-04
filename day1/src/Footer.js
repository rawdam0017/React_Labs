import './Footer.css'
function Footer() {
    return (

        <section className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h3>GET IN TOUCH</h3>
                        <i className="fas fa-phone">+123-456-7890</i>
                        <br />
                        <i className="fas fa-envelope"> shaikhanas@gmail.com</i>
                    </div>

                    <div className="col-md-4 a">
                        <a href="#hero" className="link-btn" download>Contact Me</a>
                    </div>
                    <div className="col-md-4 share">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-linkedin"></i>
                        <i className="fab fa-twitter"></i>
                        <p className="credit">
                            created by <span>mr. web designer</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;