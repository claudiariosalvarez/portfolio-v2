import './header.css'

function Footer() {
    return (
        <footer className="container-fluid">
            <div className="container">
                <div className="row">
                    <div id="line" className="col-md-12"></div>
                </div>
            </div>
            <div id="footer-main-container" className="container d-flex flex-column justify-content-center">
                <div className="row">
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <div>
                            <span className="footer-main-text">CLAUDIA RÍOS ÁLVAREZ</span>
                            <img id="vertical-bar-separator" src="./pictures/vertical_bar.svg" alt="Separator" />
                            <span className="footer-main-text">MY PROJECTS</span>
                        </div>
                    </div>
                    <div className="offset-md-2 col-md-1 d-flex flex-column justify-content-center">
                        <div className="d-flex flex-row justify-content-end">
                            <a href="https://www.behance.net/claudiariosalvarez">
                                <img src="./pictures/behance_footer.svg" alt="Behance" />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-1 d-flex flex-column justify-content-center">
                        <div className="d-flex flex-row justify-content-end">
                            <a href="https://claudiarios97.medium.com/">
                                <img src="./pictures/medium_footer.svg" alt="Medium" />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-1 d-flex flex-column justify-content-center">
                        <div className="d-flex flex-row justify-content-end">
                            <a href="https://www.linkedin.com/in/claudiariosalvarez">
                                <img src="./pictures/instagram_footer.svg" alt="Instagram" />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-1 d-flex flex-column justify-content-center">
                        <div className="d-flex flex-row justify-content-end">
                            <a href="https://www.instagram.com/claudia_ux_ui/">
                                <img src="./pictures/linkedin_footer.svg" alt="Linkedin" />
                            </a>
                        </div>
                    </div>
                </div>
                <div id="by-clau-rios" className="d-flex flex-row justify-content-center">
                    @2019 by Claudia Ríos
                </div>
            </div>
        </footer>
    );
}

export default Footer