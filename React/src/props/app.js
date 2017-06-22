import React from "react";
import {render} from "react-dom";

import AppHeader from "./header.js";
import AppFooter from "./footer.js";

class App extends React.Component {
	sayHello(){
		alert('sayHello');
	}

	render(){
		return (
			<div> 
				<AppHeader text="Header Info" sayHi={this.sayHello}></AppHeader>
				<div>Hello</div>
				<AppFooter text="Footer Info"></AppFooter>
			</div>
		);
	}
}
document.addEventListener('DOMContentLoaded', function() {
	render(<App/>, document.getElementById('app'));
});