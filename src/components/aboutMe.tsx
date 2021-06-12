import './aboutMe.css'

function AboutMe() {
    return (
        <div className="container-fluid padding-zero">
            <div className="d-flex justify-content-center">
                <div id="presentation" className="content-width">
                    <div id="language" className="row">
                        <div className="col-md-1 offset-md-10 d-flex justify-content-end">
                            <span id="english" className="pointer">English</span>
                        </div>
                        <div className="col-md-1 d-flex justify-content-end">
                            <span id="spanish" className="pointer">Español</span>
                        </div>
                    </div>
                    <div id="clau-picture-and-presentation" className="row">
                        <div id="clau-picture" className="col-md-5">
                            <img src="./pictures/profile_picture.svg" alt="Clau profile picture"></img>
                        </div>
                        <div className="offset-md-1 col-md-6 d-flex flex-column justify-content-md-center">
                            <div id="presentation-text" className="d-flex flex-column justify-content-md-between">
                                <div id="presentation-title-and-subtitle"
                                    className="d-flex flex-column justify-content-md-center">
                                    <h1>Hi, I’m Clau!</h1>
                                    <h4>UX/UI Designer</h4>
                                </div>
                                <div id="presentation-paraphs" className=" d-flex flex-column justify-content-around">
                                    <div className="presentation-text">
                                        I´m a design enthusiast in all of its shapes. I started with industrial design and
                                        3D printing, but now, I’ve discovered my real desire: User experience and interface design.
                                    </div>
                                    <div className="presentation-text">
                                        I consider myself to be a very open-minded and proactive person. Also, I enjoy
                                        public speaking and working in teams. After my bootcamp on UX and UI design and my experience in
                                        Habitant, I have the skills and knowledge to face my next challenge.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="my-projects-background">
                <div>
                    <div id="my-projects-padding" className="d-flex justify-content-center">
                        <div className="content-width">
                            <div className="row">
                                <h3>My projects</h3>
                            </div>
                            <div id="my-projects" className="row d-flex justify-content-lg-between">
                                <div className="padding-zero project-card">
                                    <div className="project">
                                        <div id="ux-ui-design-image">
                                            <img src="./pictures/ux_ui_design.svg" alt="UX/UI design"></img>
                                        </div>
                                        <div className="project-text">UX/UI DESIGN</div>
                                        <div className="view-projects-text">
                                            <a href="./UXUIProjects">
                                                <span>View projects </span>
                                                <img src="./pictures/arrow.svg" alt="view ux/ui projects"></img>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="padding-zero project-card">
                                    <div className="project">
                                        <div id="industrial-design-image">
                                            <img src="./pictures/industrial_design.svg" alt="Industrial design"></img>
                                        </div>
                                        <div className="project-text">INDUSTRIAL DESIGN</div>
                                        <div className="view-projects-text">
                                            <a href="./industrialProjects">
                                                <span>View projects </span>
                                                <img src="./pictures/arrow.svg" alt="view ux/ui projects"></img>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="padding-zero project-card">
                                    <div className="project">
                                        <div id="printing-image">
                                            <img src="./pictures/3d_printing.svg" alt="3d Printing"></img>
                                        </div>
                                        <div className="project-text">3D PRINTING</div>
                                        <div className="view-projects-text">
                                            <a href="./3DPrintProjects">
                                                <span>View projects </span>
                                                <img src="./pictures/arrow.svg" alt="view ux/ui projects"></img>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="contact-me-container" className="d-flex justify-content-center">
                <div className="content-width">
                    <h3>Contact me</h3>
                    <div id="contact-me" className="row">
                        <div id="contact-me-left" className="col-md-6 d-flex flex-column justify-content-between">
                            <div>
                                <img className="contact-me-icon" src="./pictures/envelope_icon.svg" alt="Email"></img>
                                <a href="claudiarios97@gmail.com" className="contact-me-text">claudiarios97@gmail.com</a>
                            </div>
                            <div>
                                <img className="contact-me-icon" src="./pictures/phone_icon.svg" alt="Phone"></img>
                                <a href="tel:622827625" className="contact-me-text">622827625</a>
                            </div>
                            <div>
                                <img className="contact-me-icon" src="./pictures/man_icon.svg" alt="Download"></img>
                                <span className="contact-me-text">Download my CV</span>
                            </div>
                        </div>
                        <div id="contact-me-right" className="col-md-6 d-flex flex-column justify-content-between">
                            <div>
                                <a href="https://www.behance.net/claudiariosalvarez">
                                    <img className="contact-me-icon" src="./pictures/behance.svg" alt="Behance"></img>
                                    <span className="contact-me-text">Claudia RíosÁlvarez</span>
                                </a>
                            </div>
                            <div>
                                <a href="https://claudiarios97.medium.com/">
                                    <img className="contact-me-icon" src="./pictures/medium.svg" alt="Medium"></img>
                                    <span className="contact-me-text">@claudiarios97</span>
                                </a>
                            </div>
                            <div>
                                <a href="https://www.linkedin.com/in/claudiariosalvarez">
                                    <img className="contact-me-icon" src="./pictures/linkedin.svg" alt="Linkedin"></img>
                                    <span className="contact-me-text">/claudiariosalvarez</span>
                                </a>
                            </div>
                            <div>
                                <a href="https://www.instagram.com/claudia_ux_ui/">
                                    <img className="contact-me-icon" src="./pictures/instagram.svg" alt="Instagram"></img>
                                    <span className="contact-me-text">@claudia_ux_ui</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default AboutMe;