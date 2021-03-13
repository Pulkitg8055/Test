import Axios from 'axios';

// Hitting api to server-side to create-note and update-note
export const GetNotes = () => Axios.get('/api/note');

export const CreateNote = (NoteID, Desc, Title, User) =>
	Axios.post('/api/note', { NoteID, Desc, Title, User });

export const UpdateNote = (NoteID, Desc, Title, User) =>
	Axios.put('/api/note', { NoteID, Desc, Title, User });
