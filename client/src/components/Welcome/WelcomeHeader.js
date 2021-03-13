import React from 'react';
import { Link } from 'react-router-dom';

// component providing three functionality
// navigate to Home and create new note and logout button
const WelcomeHeader = ({ User, handleLogout }) => {
	return (
		<div className='row'>
			<div className='col-12'>
				<div className='border rounded p-2'>
					<p className='mb-1'>Welcome, {User.Name}.</p>
					<Link to='/' className='btn btn-primary btn-sm mr-2'>
						Home
					</Link>
					<Link
						to='/new'
						className='btn btn-outline-primary btn-sm mr-2'
					>
						Create or Update
					</Link>

					<button
						className='btn btn-danger btn-sm'
						onClick={handleLogout}
					>
						Logout
					</button>
				</div>
			</div>
		</div>
	);
};

export default WelcomeHeader;
