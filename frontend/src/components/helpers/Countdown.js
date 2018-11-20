import React, { Component } from 'react';

type Props = {
	interval: Number,
	seconds: Number,
};

class Countdown extends Component<Props, *> {
	constructor(props) {
		super(props);

		this.state = {
			seconds: null,
		};
	}

	componentDidMount() {
		const { interval, seconds } = this.props;

		this.setState({ seconds });
		this.interval = setInterval(this.tick.bind(this), interval);
	}

	componentWillUnmount() {
		delete this.interval;
	}

	tick() {
		const { seconds } = this.state;
		const isComplete = seconds === 0;

		if (!isComplete) {
			const newSec = seconds - 1;

			this.setState({
				seconds: newSec,
			});
		}
	}

	render() {
		const { seconds } = this.state;

		return <span>{seconds}</span>;
	}
}

export default Countdown;
