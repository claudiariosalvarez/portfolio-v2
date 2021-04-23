import './header.css'

function PortfolioHeader() {
    return(
    <div className="d-flex justify-content-center">
        <div id="header" className="content-width d-flex flex-column justify-content-center">
            <div className="row">
                <div id="claudia-rios-alvarez" className="col-md-3 d-flex justify-content-start">CLAUDIA RIOS</div>
                <a href="./portfolio.html" id="portfolio" className="pointer col-md-2 offset-md-5 d-flex justify-content-center">
                    <span>Portfolio</span>
                </a>
                <a href="" id="about-me" className="col-md-2 d-flex justify-content-center">
                    <span>About me</span>
                </a>
            </div>
        </div>
    </div>);
}

export default PortfolioHeader