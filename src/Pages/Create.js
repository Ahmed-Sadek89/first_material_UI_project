// react
import {useState} from 'react';
import { useHistory } from 'react-router-dom';

// Material UI
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
// AllStyles
import {useStyles} from '../Components/AllStyles';


const Create = () =>{
    // styles
    const classes = useStyles();
    // states and Hooks
    const [title, setNotes] = useState('');
    const [details, setDetails] = useState('');
    const [category, setCategory] = useState(null);
    const [errorNotes, setErrorNotes] = useState(false);
    const [errorDetails, setErrorDetails] = useState(false);
    const [errorCategory, setErrorCategory] = useState('');
    const history = useHistory()
    // functions
    const handleSubmit = (e) =>{
        e.preventDefault();
        setErrorNotes(false);
        setErrorDetails(false);
        setErrorCategory('')
        if( title === ''){
            setErrorNotes(true);
        }
        if( details === ''){
            setErrorDetails(true);
        }
        if( category === null){
            setErrorCategory('select one category');
        } 
        if(title && details && category){
        //console.log({notes,details,category})
        fetch('http://localhost:8000/notes',{
            method: 'POST',
            headers: {"Content-type": "application/json"},
            header: {"content-type": "application/json"},
            body: JSON.stringify({title,details,category}),
        }).then( () => history.push('/'))
        }
    }
    return(
     <Container>
         <Typography
            variant='h4'
            color='textSecondary'
            gutterBottom
         >
             Create a new note
        </Typography>

        <form autoComplete='off' onSubmit={handleSubmit}>
            <TextField
             label='note title' 
             variant='outlined' 
             color='secondary'
             fullWidth
             className={classes.inputeCreate}
             onChange={(e) => setNotes(e.target.value)}
             error={errorNotes}
            />
            <TextField
             label='details' 
             variant='outlined' 
             color='secondary'
             fullWidth
             multiline
             rows={4}
             className={classes.inputeCreate}
             onChange={(e) => setDetails(e.target.value)}
             error={errorDetails}
            />
            <FormControl >
              <FormLabel className={classes.formLabel}>note category</FormLabel>
              <RadioGroup
               className={classes.inputeCreate}
                value={category}
                 onChange={(e) => setCategory(e.target.value)} >
                  <FormControlLabel value='money' control={<Radio />} label='Money' />
                  <FormControlLabel value='todos' control={<Radio />} label='todos' />
                  <FormControlLabel value='remainders' control={<Radio />} label='remainders' />
                  <FormControlLabel value='work' control={<Radio />} label='work' />
                  <Typography color='error' >{errorCategory}</Typography>
              </RadioGroup>
              <Button
                type='submit'
                color='secondary'
                variant='contained'
                endIcon={<KeyboardArrowRightIcon/>}
                >
                    Submit
              </Button>
            </FormControl>
            
        </form>
     </Container>
    )
}

export default Create;
