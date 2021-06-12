import React from 'react';
import { Link } from 'react-router-dom';
import { Pages } from '../../pages';

import './header.css'

interface IProps {
    selectedPage: Pages,
    onPageChange: (page: Pages) => void;
}

const SELECTED_PAGE_ID = "selectedPage";
const EMPTY = "";

export default class Header extends React.Component<IProps, {}> {

    constructor(props: IProps) {
        super(props);
    }

    private isSelectedPage(page: Pages): Boolean {
        return page === this.props.selectedPage;
    }

    private setSelectedPageId(page: Pages){
        return this.isSelectedPage(page) ? SELECTED_PAGE_ID : EMPTY;
    }

    public render() {
        return (
            <header>
                <div className="d-flex justify-content-center">
                    <div id="header" className="content-width d-flex flex-column justify-content-center">
                        <div className="row">
                            <div id="claudia-rios-alvarez" className="col-md-3 d-flex justify-content-start">CLAUDIA RIOS</div>
                            <Link to="/aboutMe" id={this.setSelectedPageId(Pages.ABOUT)} className="page pointer col-md-2 offset-md-5 d-flex justify-content-center"
                                onClick={() => this.props.onPageChange(Pages.ABOUT)}>
                                About me
                            </Link>
                            <Link to="/portfolio" id={this.setSelectedPageId(Pages.PORTFOLIO)} className="page col-md-2 d-flex justify-content-center"
                                onClick={() => this.props.onPageChange(Pages.PORTFOLIO)}>
                                Portfolio
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
