import React, { Component } from 'react';

export default class Delayed extends Component {
	constructor(props) {
		super(props);
		this.state = {
			content: null,
		};
	}

	componentDidMount() {
		this.renderDelayedContent();
	}

	renderDelayedContent() {
		const content = window.setTimeout(() => {
			this.setState({ content: 'this sentence shows up 5 seconds after the App starts loading' });
		}, 5000);
	}

	render() {
		return <div>{this.state.content}</div>;
	}
}
