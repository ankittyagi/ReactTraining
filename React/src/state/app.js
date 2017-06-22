import React from "react";
import {render} from "react-dom";

import Counter from "./counter.js";

class App extends React.Component {
	render(){
		return (
			<div> 
				<Counter></Counter>
			</div>
		);
	}
}

document.addEventListener('DOMContentLoaded', function() {
	render(<App/>, document.getElementById('app'));
});