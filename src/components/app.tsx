import React from "react"
import { HashRouter, Route, Switch } from "react-router-dom"
import { Languages } from "../languages"
import { Pages } from "../pages"
import AboutMe from "./aboutMe/aboutMe"
import { Portfolio } from "./portfolio/portfolio"
import Footer from "./static/footer"
import Header from "./static/header"

interface IState {
    currentPage: Pages,
    currentLanguage: Languages
}

export default class App extends React.Component<{}, IState> {

    constructor(props: {}) {
        super(props);

        this.state = {
            currentPage: this.getCurrentPage(),
            currentLanguage: Languages.ENGLISH
        }
    }

    private getCurrentPage() {
        const currentPath = window.location.href;
        console.log(currentPath);
        if (currentPath.endsWith("portfolio"))
            return Pages.PORTFOLIO;
        return Pages.ABOUT;
    }

    public render() {
        return (
            <div>
                <HashRouter>
                    <Header
                        onPageChange={(page) => this.setState({ currentPage: page })}
                        onLanguageChange={(language) => this.setState({ currentLanguage: language })}
                        language={this.state.currentLanguage}
                        selectedPage={this.state.currentPage} />
                    <Switch>
                        <Route path="/portfolio">
                            <Portfolio language={this.state.currentLanguage} />
                        </Route>
                        <Route path={["/", "/aboutMe"]}>
                            <AboutMe language={this.state.currentLanguage} />
                        </Route>
                    </Switch>
                </HashRouter>
                <Footer />
            </div>
        );
    }
}