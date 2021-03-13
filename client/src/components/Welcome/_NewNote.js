import React, { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { CreateNote } from '../../services/Notes';

const NewNote = ({ User, RefreshNotes }) => {
	User = User.Name;
	// Saving Description and title
	const [Desc, setDesc] = useState('');
	const [Title, setTitle] = useState('');
	const NoteID = Title;

	const handleSubmit = (e) => {
		e.preventDefault();
		CreateNote(NoteID, Desc, Title, User).then(() => {
			RefreshNotes();
		});
	};

	// To reset the the title and description
	const handleReset = (e) => {
		e.preventDefault();
		setDesc('');
		setTitle('');
	};

	// To add new note
	return (
		<form className='NewNote' onSubmit={handleSubmit} onReset={handleReset}>
			<h3 className='mb-3'>
				Title
				<input
					type='text'
					placeholder='Enter title here...'
					value={Title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</h3>
			<p>
				<em>Being created by {User}...</em>
			</p>
			{/* Using MDEditor for text area */}
			<MDEditor
				height={window.innerHeight - 500}
				value={Desc}
				onChange={setDesc}
			/>
			{/* Input field Submit type  to create , reset and update   */}
			<input
				type='submit'
				value='Create'
				className='btn btn-primary mt-3'
			/>
			<input
				type='reset'
				value='Reset'
				className='btn btn-outline-secondary mt-3 ml-3'
			/>

			<input
				type='submit'
				value='Update'
				className='btn btn-primary mt-3 ml-3'
			/>
		</form>
	);
};

export default NewNote;
