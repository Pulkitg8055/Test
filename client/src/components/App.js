import React, { Component } from 'react';
import { AuthUser, CheckUser, LogoutUser } from '../services/User';
import Header from './Header/Header';
import Login from './Login/Login';
import Welcome from './Welcome/Welcome';

export default class App extends Component {
	state = {
		User: null,
		AuthError: null,
	};

	componentDidMount() {
		CheckUser().then((res) => {
			this.setState({
				User: res.data,
			});
		});
	}

	handleAuth = (username, password) => {
		AuthUser(username, password)
			.then((res) => {
				this.setState({
					User: res.data.Message,
					AuthError: null,
				});
			})
			.catch((error) => {
				this.setState({
					User: null,
					AuthError: error.response.data.Message,
				});
			});
	};

	handleLogout = (e) => {
		e.preventDefault();
		LogoutUser().then(() => {
			this.setState({ User: null });
		});
	};

	render() {
		return (
			<div className='App'>
				<Header dark={true} className='Header'>
					Notes App
				</Header>
				{this.state.User ? (
					<Welcome
						User={this.state.User}
						handleLogout={this.handleLogout}
					/>
				) : (
					<Login
						handleAuth={this.handleAuth}
						AuthError={this.state.AuthError}
					/>
				)}
			</div>
		);
	}
}
