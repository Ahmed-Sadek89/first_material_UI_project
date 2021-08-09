// Material UI
import CardHeader from '@material-ui/core/CardHeader';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Avatar } from '@material-ui/core';
// components
import {useStyles2} from './AllStyles';

const NoteCard = ({note, DeleteSelectedNote}) =>{

    const classes2 = useStyles2(note);
    
    return(
        <Grid item xs={12} sm={6} md={4}  >
            <Card elevation={9}>
                <CardHeader 
                    action={
                        <IconButton onClick={() => DeleteSelectedNote(note.id)}>
                            <DeleteOutlineIcon/>
                        </IconButton>
                    }
                    avatar={
                        <Avatar className={classes2.setAvatarColor}>
                            {note.category[0].toUpperCase()}
                        </Avatar>
                    }    
                    title={note.title}
                    subheader={note.category}
                />
                <CardContent>
                    <Typography>
                        {note.details}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>

    )
}

export default NoteCard;
