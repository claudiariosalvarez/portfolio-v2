import React from "react"
import { HashRouter, Route, Switch } from "react-router-dom"
import { Pages } from "../pages"
import AboutMe from "./aboutMe/aboutMe"
import { Portfolio } from "./portfolio/portfolio"
import Footer from "./static/footer"
import Header from "./static/header"

interface IState {
    currentPage: Pages,
}

export default class App extends React.Component<{}, IState> {

    constructor(props: {}) {
        super(props);

        this.state = {
            currentPage: Pages.ABOUT
        }
    }
  
    public render() {
        return (
        <div>
            <HashRouter>
                <Header onPageChange={(page) => this.setState({currentPage:page})} selectedPage={this.state.currentPage}/>
                <Switch>
                    <Route path="/portfolio">
                        <Portfolio />
                    </Route>
                    <Route path={["/aboutMe", "/"]}>
                        <AboutMe />
                    </Route>
                </Switch>
            </HashRouter>
            <Footer />
        </div>
        );
    }
}