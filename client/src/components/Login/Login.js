import React from 'react';
import LoginForm from './_LoginForm';

//Presentational component of login
const Login = ({ handleAuth, handleReg, AuthError, RegError, RegSuccess }) => {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-6'>
					<LoginForm handleAuth={handleAuth} Error={AuthError} />
					<pre> Username: Pulkit Password: Hello123</pre>
				</div>
			</div>
		</div>
	);
};

export default Login;
