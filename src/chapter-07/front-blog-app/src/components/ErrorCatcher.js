import React, { Component } from 'react';
import ErrorPage from '../pages/ErrorPage';
import PropTypes from 'prop-types';

class ErrorCatcher extends Component {
	state = {
		error: null,
		errorInfo: null,
	};

	constructor(props) {
		super(props);
	}

	componentDidCatch(error, errorInfo) {
		console.error({ error, errorInfo });

		this.setState({
			error,
			errorInfo,
		});
	}

	render() {
		const { children } = this.props;
		const { error } = this.state;
		if (error) {
			return <ErrorPage />;
		}

		return <div>{children}</div>;
	}
}

ErrorCatcher.propTypes = {};

export default ErrorCatcher;
