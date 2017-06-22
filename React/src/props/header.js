import React from "react";

class AppHeader extends React.Component {

	constructor(){
		super();
	}
	
	render(){
		return (
			<div>
				<h1>{this.props.text}</h1>
				<h2>{this.props.text}</h2>
				<button onClick={this.props.sayHi}>Click me</button>
			</div>
		);
	}
}

AppHeader.defaultProps = {
	text: "Header title"
};


export default AppHeader;