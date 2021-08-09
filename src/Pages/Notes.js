// React & Components
import {useState, useEffect } from 'react';
import NoteCard from '../Components/NoteCard';
import {useStyles} from '../Components/AllStyles';
// Material UI
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';

const Notes = () =>{
    // Hooks and variables
    const [note, setNotes] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:8000/notes')
            .then(res => res.json())
            .then(data => setNotes(data))
    },[]);
    
    const classes =  useStyles();

    //Functions 
    const DeleteSelectedNote = async(id)=>{
        await fetch('http://localhost:8000/notes/' + id,{
            method:'DELETE'
        })
        const deleteOne = note.filter(
            (selectedNote) => selectedNote.id !== id
        )
        setNotes(deleteOne);
    }

    //console.log(note)
    return(
    <Container>
        <Grid container spacing={3} className={classes.noteContainer}>
            {note.map(AllNotes =>(
                    <NoteCard key={AllNotes.id} note={AllNotes} DeleteSelectedNote={DeleteSelectedNote} />
            ))}
        </Grid>
    </Container>
    )
}

export default Notes;
