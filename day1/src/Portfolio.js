import './Portfolio.css'
import React from "react";

class Portfolio extends React.Component {
    state = {
        protfolio: ['Web Design', 'Web Design', 'Web Design', 'Web Design', 'Web Design', 'Web Design']
    };
    constructor() {
        super();
    }
    render() {
        const { portfolio } = this.state.protfolio;
        console.log(portfolio)
        return (
            <section className="Portfolio" id="Portfolio">
                <h1>Portfolio</h1>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card bg-dark content">
                                {portfolio.map((port) => {
                                    return (
                                        <div className="card-body">
                                            <h5 className="card-title">{port}</h5>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="container">
                        {portfolio.map((port) => {
                    <div className="row align-items-center">
                            return (
                                <div className="card col-md-3 conten">
                                    <div className="card-body">
                                        <h5 className="card-title">{port}</h5>
                                        <hr />
                                    </div>
                                </div>

                            )
                        })}
                    </div>
                </div> */}
            </section >

        )
    }
}

export default Portfolio;