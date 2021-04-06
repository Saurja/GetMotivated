import React, { Component } from 'react';
import FetchQuote from "./quotesFetcher"



export class Main extends Component {
    render() {
        return(
            <div className="App">
                <div className="QuoteBox paper container-xs">
                    <FetchQuote/>
                    <div className="Buttons">
                        <a href="https://www.linkedin.com/in/saurjaghosh/">
                            <button className="ButtonLeft paper-btn btn-primary btn-small">@saurja</button>
                        </a> 
                        <a href="/getMotivated" refresh="true">
                            <button className="ButtonRight btn-small" refresh="true">New Quote</button>
                        </a> 
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;