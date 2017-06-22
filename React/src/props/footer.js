import React from "react";

class AppFooter extends React.Component {

	constructor(){
		super();
	}

	render(){
		return(
			<div>
				<h1>{this.props.text}</h1>
			</div>
		);
	}
}

export default AppFooter;