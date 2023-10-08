import React, { useState  } from 'react';
import './Notes.css'

    const Notes = () => {
    
        const [Notes, setNotes] = useState([
            
        ])
    
        const [selectedNote, setSelectedNote] = useState(Notes[0])
    
        const handleDelete = (id) => {
    
            setNotes(Notes.filter(e => e.id !== id))
            console.log(Notes)
            setSelectedNote(Notes[Notes.length-1])
            
        }
    
        const handleUpdate = (id,event) => {
            console.log(id,event.target.value)
            let newTitle = ''
            if (event.target.value.length > 8) { 
                newTitle = event.target.value.slice(0,8)+' ..'}
            else if (event.target.value === '') {
                newTitle = 'Empty Note'
            }
            else {
                newTitle = event.target.value
            }
            const updatedNotes = Notes.map((myNote) => {
                if (id === myNote.id) { 
                    setSelectedNote({...myNote, title: newTitle,content: event.target.value })
                    return {...myNote, title: newTitle,content: event.target.value } }
                return myNote
            });
    
            setNotes(updatedNotes)
            
            console.log(Notes)
        }
    
        const handleEdit = (note) => {
            console.log(note)
            setSelectedNote(note)
            
        }
    
    
        const handelClick = () => {
            console.log(Notes)
            setSelectedNote(Notes[Notes.length-1])
        }
    
        const handelAddNote = () => {
            const newNote = {id: Notes.length+1, title:'New Note', content:''}
            setNotes([...Notes, newNote])
            handleEdit(newNote)
        }
    
    
    return (
        <div className='parent'>
            {/*<button onClick={handelClick}>Show Notes</button>*/}
            <div className='topBar'>
                <button className='addBtn' onClick={handelAddNote}>+ Add Note</button>
            </div>
            <div className='notesList'>
                <ul>
                    { Notes.length !== 0 ? Notes.map(note => (
                        <div className='note' onClick={()=>handleEdit(note)}>
                            <li className='noteTitle' key={note.id}>
                                <span >{note.title}</span>
                            </li>
                            <button className='deleteBtn' onClick={()=>handleDelete(note.id)}>x</button>
                        </div>
                        )
                    ) : console.log('Theres noo Notes') }     
                </ul>
                <div className='editArea'>
                {selectedNote === undefined || Notes.length === 0 ? (
                    <span className='note'>There are no notes</span>
                    ) : (
                    <textarea
                        className='editNote'
                        value={selectedNote.content}
                        onChange={(event) => handleUpdate(selectedNote.id, event)}
                        placeholder='Write your note here!'
                    />
                    )}

                </div>
            </div>
            
        </div>
    );
};
    
    
    export default Notes;