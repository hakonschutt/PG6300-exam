import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as appActions from '@actions';

function mapStateToProps(state) {
	return state;
}

const reduxConnect = (
	WrappedComponent,
	actions = appActions,
	state = mapStateToProps
) => {
	return connect(
		state,
		actions
	)(withRouter(WrappedComponent));
};

export default reduxConnect;
