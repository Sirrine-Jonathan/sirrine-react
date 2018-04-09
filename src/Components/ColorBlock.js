import React, { Component } from 'react';

class ColorBlock extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			color: "blue",
			text: "blue"
		};
	}
	
	changeColor(event) {
		this.setState({
			color: event.target.value,
			text: event.target.value
		});
	}
	
	render() {
		const styleObj = {
				backgroundColor: this.state.color
		};
		return (
			<div style={styleObj} id="color-div">
				<h1>{this.state.color}</h1>
				<input type="text" placeholder="color" value={this.state.color} onChange={this.changeColor.bind(this)} />
			</div>
		);
	}
	

}

export default ColorBlock;