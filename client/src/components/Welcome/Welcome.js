import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { GetNotes } from '../../services/Notes';
import List from './List';
import Note from './Note';
import WelcomeHeader from './WelcomeHeader';

class Welcome extends Component {
	// Used to store notes
	state = {
		Notes: [],
	};

	// Geting notes from server side
	RefreshNotes = () => {
		GetNotes().then((res) => {
			this.setState({
				Notes: res.data,
			});
		});
	};
	//  Update the notes during mounting using RefreshNotes function
	componentDidMount() {
		this.RefreshNotes();
	}
	render() {
		const { User, handleLogout } = this.props;
		return (
			<div className='container'>
				{/*
				Displaying Header which contain three option 
				1. Home
				2. Create or Update
				3. Logout
				 */}
				<WelcomeHeader
					User={User}
					handleLogout={handleLogout}
					Notes={this.state.Notes}
				/>
				<div className='row mt-3'>
					<Route path={['/:NoteID', '/']}>
						<div className='col-3'>
							<List Notes={this.state.Notes} User={User} />
						</div>
						<div className='col-9'>
							{/* Display all notes available */}
							<Note
								Notes={this.state.Notes}
								User={User}
								RefreshNotes={this.RefreshNotes}
							/>
						</div>
					</Route>
				</div>
			</div>
		);
	}
}
export default Welcome;
