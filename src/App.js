import React,{useState,useEffect} from "react";

import './App.scss'

import FetchQuote from "./quotesFetcher"

function App() {
  return (
    <div className="App">
		<div className="QuoteBox paper container-xs">
			
			<FetchQuote/>

			<div className="Buttons">
				<a href="https://www.linkedin.com/in/saurjaghosh/">
					<button className="ButtonLeft paper-btn btn-primary btn-small">@saurja</button>
				</a> 
				<a href="" refresh="true">
					<button className="ButtonRight btn-small" refresh="true">New Quote</button>
				</a> 
				
			</div>
    	</div>
    </div>
  );
}

export default App;
