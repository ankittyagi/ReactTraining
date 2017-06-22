import React from "react";
import {render} from "react-dom";

import AppHeader from "./header.js";
import AppFooter from "./footer.js";

class App extends React.Component {
	constructor(){
		super();
	}

	render(){
		return (
			<div> 
				<AppHeader></AppHeader>
				<div>Hello App !!!!</div>
				<AppFooter></AppFooter> 
			</div>
		);
	}
}
document.addEventListener('DOMContentLoaded', function() {
	render(<App/>, document.getElementById('app'));
});