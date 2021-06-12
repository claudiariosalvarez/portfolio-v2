import React from 'react';
import { Link } from 'react-router-dom';
import { getText, Languages } from '../../languages';
import { Pages } from '../../pages';

import './header.css'

interface IProps {
    selectedPage: Pages,
    language: Languages,
    onPageChange: (page: Pages) => void;
    onLanguageChange: (language: Languages) => void;
}

interface IState {
    texts: ITexts,
}

interface ITexts {
    aboutMeTitle: String,
    languageText: String
}

const SELECTED_PAGE_ID = "selectedPage";
const EMPTY = "";
const MODULE = "header";

export default class Header extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);

        this.state = this.getUpdatedState(this.props.language);
    }

    private isSelectedPage(page: Pages): Boolean {
        return page === this.props.selectedPage;
    }

    private setSelectedPageId(page: Pages) {
        return this.isSelectedPage(page) ? SELECTED_PAGE_ID : EMPTY;
    }

    private getUpdatedState(language: Languages): IState {
        return {
            texts: {
                aboutMeTitle: getText(MODULE, language, "aboutMeTitle"),
                languageText: getText(MODULE, language, "languageText")
            }
        }
    }

    private changeLanguage(language: Languages) {
        this.props.onLanguageChange(language);
        this.setState(this.getUpdatedState(language));
    }

    public render() {
        return (
            <header>
                <div className="d-flex justify-content-center">
                    <div id="header" className="content-width d-flex flex-column justify-content-center">
                        <div className="row">
                            <div id="claudia-rios-alvarez" className="col-md-3 d-flex flex-column justify-content-end">
                                <span>CLAUDIA RIOS</span>
                            </div>
                            <Link to="/aboutMe" id={this.setSelectedPageId(Pages.ABOUT)} className="page pointer col-md-2 offset-md-3 d-flex flex-column justify-content-end"
                                onClick={() => this.props.onPageChange(Pages.ABOUT)}>
                                <span>{this.state.texts.aboutMeTitle}</span>
                            </Link>
                            <Link to="/portfolio" id={this.setSelectedPageId(Pages.PORTFOLIO)} className="page col-md-2 d-flex flex-column justify-content-end"
                                onClick={() => this.props.onPageChange(Pages.PORTFOLIO)}>
                                <span>Portfolio</span>
                            </Link>
                            <div id="language" className="dropdown d-flex flex-column justify-content-end">
                                <div data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="d-flex flex-row justify-content-between">
                                    <span>{this.state.texts.languageText}</span>
                                    <img src="./pictures/arrow_down.svg" />
                                </div>

                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <span className="dropdown-item language" id={this.props.language === Languages.ENGLISH ? "selectedLanguage" : ""} onClick={ () => this.changeLanguage(Languages.ENGLISH)}>English</span>
                                    <span className="dropdown-item language" id={this.props.language === Languages.SPANISH ? "selectedLanguage" : ""} onClick={ () => this.changeLanguage(Languages.SPANISH)}>Español</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
    
}
