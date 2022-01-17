import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
const AdminRoute = ({component: Components, ...rest}) => {
	const auth = useSelector(state => state.auth);

	console.log(auth.user);
	return (
		<Route
			{...rest}
			render={props =>
				auth.isAuthenticated && auth.user.role === 0 ? (
					<Redirect
						to={{pathname: '/login', state: {from: props.location}}}
					/>
				) : (
					<Components {...props} />
				)
			}
		/>
	);
};

export default AdminRoute;
