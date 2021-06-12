import React from 'react';
import './aboutMe.css'
import { Languages, getText } from '../../../languages';

interface IProps {
    language: Languages,
}

interface IState {
    texts: ITexts
}

interface ITexts {
    presentationTitle: String,
    presentationSubTitle: String,
    presentationTextFirstParagraph: String,
    presentationTextSecondParagraph: String,
    myProjectsTitle: String,
    UXUIDesignText: String,
    industrialDesignText: String,
    printing3dText: String,
    viewProjectsText: String
    contactMeTitle: String,
    downloadMyCVText: String
}

const MODULE = "aboutMe";

export default class AboutMe extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        
        this.state = this.getUpdatedState(this.props.language);
    }

    private getUpdatedState(language: Languages): IState {
        return {
            texts: {
                presentationTitle: getText(MODULE, language, "presentationTitle"),
                presentationSubTitle: getText(MODULE, language, "presentationSubTitle"),
                presentationTextFirstParagraph: getText(MODULE, language, "presentationTextFirstParagraph"),
                presentationTextSecondParagraph: getText(MODULE, language, "presentationTextSecondParagraph"),
                myProjectsTitle: getText(MODULE, language, "myProjectsTitle"),
                UXUIDesignText: getText(MODULE, language, "UXUIDesignText"),
                industrialDesignText: getText(MODULE, language, "industrialDesignText"),
                printing3dText: getText(MODULE, language, "printing3dText"),
                viewProjectsText: getText(MODULE, language, "viewProjectsText"),
                contactMeTitle: getText(MODULE, language, "contactMeTitle"),
                downloadMyCVText: getText(MODULE, language, "downloadMyCVText"),
            }
        }
    }
    

    public componentDidUpdate(prevProps: Readonly<IProps>) {
        if(prevProps.language !== this.props.language){
            this.setState(this.getUpdatedState(this.props.language));
        }
    }

    public render() {
        return (
            <div>
                <div className="d-flex justify-content-center">
                    <div id="presentation" className="content-width">
                        <div id="clau-picture-and-presentation" className="row">
                            <div id="clau-picture" className="col-md-5">
                                <img src="./pictures/profile_picture.svg" alt="Clau profile picture"></img>
                            </div>
                            <div className="offset-md-1 col-md-6 d-flex flex-column justify-content-md-center">
                                <div id="presentation-text" className="d-flex flex-column justify-content-md-between">
                                    <div id="presentation-title-and-subtitle"
                                        className="d-flex flex-column justify-content-md-center">
                                        <h1>{this.state.texts.presentationTitle}</h1>
                                        <h4>{this.state.texts.presentationSubTitle}</h4>
                                    </div>
                                    <div id="presentation-paragraphs" className=" d-flex flex-column justify-content-around">
                                        <div className="presentation-text">
                                            {this.state.texts.presentationTextFirstParagraph}
                                        </div>
                                        <div className="presentation-text">
                                            {this.state.texts.presentationTextFirstParagraph}
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
                                    <h3>{this.state.texts.myProjectsTitle}</h3>
                                </div>
                                <div id="my-projects" className="row d-flex justify-content-lg-between">
                                    <div className="padding-zero project-card">
                                        <div className="project">
                                            <div id="ux-ui-design-image">
                                                <img src="./pictures/ux_ui_design.svg" alt="UX/UI design"></img>
                                            </div>
                                            <div className="project-text">{this.state.texts.UXUIDesignText}</div>
                                            <div className="view-projects-text">
                                                <a href="./UXUIProjects">
                                                    <span>{this.state.texts.viewProjectsText}</span>
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
                                            <div className="project-text">{this.state.texts.industrialDesignText}</div>
                                            <div className="view-projects-text">
                                                <a href="./industrialProjects">
                                                    <span>{this.state.texts.viewProjectsText}</span>
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
                                            <div className="project-text">{this.state.texts.printing3dText}</div>
                                            <div className="view-projects-text">
                                                <a href="./3DPrintProjects">
                                                    <span>{this.state.texts.viewProjectsText}</span>
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
                        <h3>{this.state.texts.contactMeTitle}</h3>
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
                                    <span className="contact-me-text">{this.state.texts.downloadMyCVText}</span>
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
            </div>
        );
    }
}