import React from "react"
import { HashRouter, Route, Switch } from "react-router-dom"
import { Languages } from "../languages"
import { Pages } from "../pages"
import AboutMe from "./pages/aboutMe/aboutMe"
import { Portfolio } from "./pages/portfolio/portfolio"
import Footer from "./footer/footer"
import Header from "./header/header"

interface IState {
    currentPage: Pages,
    currentLanguage: Languages
}

export default class App extends React.Component<{}, IState> {

    constructor(props: {}) {
        super(props);

        this.state = {
            currentPage: this.getCurrentPage(),
            currentLanguage: this.getCurrentLanguage()
        }
    }

    private getCurrentLanguage(): Languages {
        const storedLang = localStorage.getItem("lang");
        if(!storedLang) {
            return Languages.ENGLISH
        }
        
        const lang = Number.parseInt(storedLang);
        
        if(lang > 1){
            return Languages.ENGLISH;
        }

        return lang;
    }

    private setLanguage(language: Languages) {
        localStorage.setItem("lang", language.toString());
        this.setState({ currentLanguage: language });
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
                        onLanguageChange={(language) => this.setLanguage(language)}
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