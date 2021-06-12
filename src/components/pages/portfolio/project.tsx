import React from "react";
import './project.css';


interface IProps {
    preTitle?: String,
    title: String,
    subTitle: String,
    parragraphs: String[],
    imgPath: String,
    imgAlt: String,
    behanceUrl?: String,
    mediumUrl?: String,
    instagramUrl?: String
}

const BEHANCE: String = "behance";
const MEDIUM: String = "medium";
const INSTAGRAM: String = "instagram";

export default class Project extends React.Component<IProps, {}> {

    constructor(props: IProps) {
        super(props);

        this.state = {}
    }

    private displayPreTitle(): JSX.Element {
        if (!this.props.preTitle) {
            return <div></div>;
        }

        return <div id="preTitle" className="paddingBetweenTexts">{this.props.preTitle}</div>
    }

    private displayParragraphs(): JSX.Element[] {
        let content: JSX.Element[] = [];
        this.props.parragraphs.forEach((parragraph, index) => {
            content.push(<div id={`text-${index}`} key={`text-${index}`} className="projectText paddingBetweenTexts">{parragraph}</div>)
        })
        return content;
    }

    private displayLinks(): JSX.Element[] {
        let links: Map<String, String> = new Map<String, String>();
        if (this.props.behanceUrl != null) {
            links.set(BEHANCE, this.props.behanceUrl);
        }
        if (this.props.mediumUrl != null) {
            links.set(MEDIUM, this.props.mediumUrl);
        }
        if (this.props.instagramUrl != null) {
            links.set(INSTAGRAM, this.props.instagramUrl);
        }
        let content: JSX.Element[] = [];
        links.forEach((value, key) =>
            content.push(
                <a className="d-flex justify-content-center flex-column linkImage" key={`${key.toString()}-link`} href={value.toString()}>
                    <img className="linkImageSize" alt={`${key} link`} key={`${key.toString()}-image`} src={this.getLinkImageSrc(key)} />
                </a>)
        );
        return content;
    }

    private getLinkImageSrc(link: String) {
        switch (link) {
            case BEHANCE: return "./pictures/behance_black.svg"
            case MEDIUM: return "./pictures/medium_black.svg"
            case INSTAGRAM: return "./pictures/instagram_black.svg"
        }
    }


    public render() {
        return (
            <div className="row max-height">
                <div id="picture" className="col-md-6">
                    <img src={this.props.imgPath.toString()} alt={this.props.imgAlt.toString()}></img>
                </div>
                <div id="content" className="col-md-6 d-flex flex-column justify-content-between">
                    <div className="d-flex flex-column">
                        {this.displayPreTitle()}
                        <div id="projectTitle" className="paddingBetweenTexts">{this.props.title}</div>
                        <div id="projectSubTitle" className="paddingBetweenTexts">{this.props.subTitle}</div>
                        {this.displayParragraphs()}
                    </div>
                    <div className="d-flex flex-row justify-content-end">
                        <div className="d-flex flex-column justify-content-center">
                            <span id="moreInfoText">More about the project</span>
                            <div id="links" className="d-flex flex-row justify-content-end">
                                {this.displayLinks()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}