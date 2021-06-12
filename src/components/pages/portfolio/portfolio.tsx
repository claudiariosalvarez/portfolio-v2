import React from "react";
import { Languages } from "../../../languages";
import './portfolio.css'
import Project from "./project";
import { ProjectTypes } from "./projectTypes";


interface IProps {
    language: Languages;
}

interface IState {
    selectedProjectType: ProjectTypes;
}

const MODULE = "porfolio";

export class Portfolio extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);

        this.state = {
            selectedProjectType: ProjectTypes.ALL
        }
    }

    private selectSubMenuItem(projectType: ProjectTypes): void {
        this.setState({ selectedProjectType: projectType });
    }

    private getSelectedSubMenuItemId(projectType: ProjectTypes): String {
        if (projectType !== this.state.selectedProjectType) {
            return "";
        }
        return "selectedSubMenuItem";
    }

    public render() {
        return (
            <div>
                <div id="portfolioContent">
                    <div id="subMenu" className="d-flex justify-content-center">
                        <div className="content-width">
                            <div className="d-flex flex-row justify-content-start">
                                <div className="d-flex flex-column justify-content-center">
                                    <a id={this.getSelectedSubMenuItemId(ProjectTypes.ALL).toString()} className="subMenuItem"
                                        onClick={() => this.selectSubMenuItem(ProjectTypes.ALL)}>ALL</a>
                                </div>
                                <img id="vertical-bar-separator" src="./pictures/vertical_bar.svg" alt="Separator" />
                                <div className="d-flex flex-column justify-content-center">
                                    <a id={this.getSelectedSubMenuItemId(ProjectTypes.UX_UI_DESIGN).toString()} className="subMenuItem"
                                        onClick={() => this.selectSubMenuItem(ProjectTypes.UX_UI_DESIGN)}>UX/UI DESIGN</a>
                                </div>
                                <img id="vertical-bar-separator" src="./pictures/vertical_bar.svg" alt="Separator" />
                                <div className="d-flex flex-column justify-content-center">
                                    <a id={this.getSelectedSubMenuItemId(ProjectTypes.INDUSTRIAL_DESIGN).toString()} className="subMenuItem"
                                        onClick={() => this.selectSubMenuItem(ProjectTypes.INDUSTRIAL_DESIGN)}>INDUSTRIAL DESIGN</a>
                                </div>
                                <img id="vertical-bar-separator" src="./pictures/vertical_bar.svg" alt="Separator" />
                                <div className="d-flex flex-column justify-content-center">
                                    <a id={this.getSelectedSubMenuItemId(ProjectTypes.PRINTING).toString()} className="subMenuItem"
                                        onClick={() => this.selectSubMenuItem(ProjectTypes.PRINTING)}>3D PRINTING</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center" >
                        <div id="carrousel" className="content-width row">
                            <div className="col-md-11">
                                <Project
                                    imgAlt="cooltura image"
                                    imgPath="./pictures/cooltura.jpg"
                                    parragraphs={["This app help users find different types os art in Madrid.", "They can look for different private exhibitions and buy their tickets from this app.", "Moreover, we provide users a “Coolture club” where they can gain points to have descounts on their tickets."]}
                                    subTitle="Find cool art in Madrid"
                                    title="COOLTURA"
                                    preTitle="PERSONAL PROJECT 2019"
                                    behanceUrl="url"
                                    mediumUrl="url"
                                />
                            </div>
                            <div className="col-md-1 d-flex flex-column justify-content-center">
                                <div className="d-flex justify-content-center">
                                    <img id="previousProjectBtn" className="carrouselBtn" src="./pictures/button_up.svg" alt="previous project" />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <img id="nextProjectBtn" className="carrouselBtn" src="./pictures/button_down.svg" alt="next project" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}