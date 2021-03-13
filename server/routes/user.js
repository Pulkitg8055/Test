const user = require('express').Router();

// Dummy list of users for now.
const Users = {
	Pulkit: 'Hello123',
	Bhooshan: '1234',
	Rishav: 'ris2000',
	Shivam: 'password',
	Rajan: 'rks12345',
	Isabel: 'coolcats123',
	Shashi: 'akcd@123',
};

user.get('/', (req, res) => {
	if (!!req.session.User) {
		res.json(req.session.User);
	} else {
		res.status(401).json({
			Error: true,
			Success: false,
			Message: 'Not Logged In!',
		});
	}
});

//Api call for login
user.post('/login', (req, res) => {
	const { username, password } = req.body;
	if (!Users[username]) {
		req.session.destroy();
		res.status(404).json({
			Error: true,
			Success: false,
			Message: 'User not found!',
		});
	} else if (Users[username] && Users[username] !== password) {
		req.session.destroy();
		res.status(403).json({
			Error: true,
			Success: false,
			Message: 'Invalid username and password!',
		});
	} else {
		req.session.User = {
			Name: username,
		};
		res.json({
			Error: false,
			Success: true,
			Message: {
				Name: username,
			},
		});
	}
});

// Api call for logout
user.post('/logout', (req, res) => {
	req.session.destroy();
	res.status(202).json({
		Error: false,
		Success: true,
		Message: 'User successfully logged out.',
	});
});

module.exports = user;
