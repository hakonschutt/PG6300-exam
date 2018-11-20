import React, { Component } from 'react';

type Props = {
	interval: Number,
	seconds: Number,
	onFinish: Function,
	onRef: Function,
};

class LargeCountdown extends Component<Props, *> {
	constructor(props) {
		super(props);

		this.state = {
			seconds: null,
			hasFinished: false,
		};
	}

	componentDidMount() {
		const { seconds } = this.props;

		this.setState({ seconds });
		this.interval = setInterval(this.tick.bind(this), 1000);
		this.props.onRef(this);
	}

	componentWillUnmount() {
		delete this.interval;
		this.props.onRef(undefined);
	}

	getSeconds() {
		return this.state.seconds;
	}

	tick() {
		const { seconds, hasFinished } = this.state;
		const isComplete = seconds === 0;

		if (hasFinished) {
			return;
		}

		if (!isComplete) {
			const newSec = seconds - 1;

			this.setState({
				seconds: newSec,
			});
		} else {
			this.setState({ hasFinished: true });
			this.props.onFinish();
		}
	}

	render() {
		const { seconds } = this.state;

		return (
			<div className="global-large-counter">
				<div
					className="large-counter-inner"
					style={{ width: `${seconds * 10}%` }}
				/>
				<span>{seconds}</span>
			</div>
		);
	}
}

export default LargeCountdown;
