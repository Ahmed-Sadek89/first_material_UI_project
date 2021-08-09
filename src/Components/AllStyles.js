import {makeStyles} from '@material-ui/core';
import { yellow, green, pink, blue } from '@material-ui/core/colors';

const WidthDrawer = 240;

export const useStyles = makeStyles((theme)=>{
   return{
        inputeCreate:{
            marginBottom: '20px'
        },
        formLabel:{
            color:'rgba(0, 0, 0, 0.54)'
        },
        rootLayout:{
            display: 'flex',
        },
        setDrawer:{
            width: WidthDrawer
        },
        ActiveItemList:{
            background: "#f7f7f7"
        },
        AppBarStyle:{
            width: `calc(100% - ${WidthDrawer}px)`
        },
        pages: theme.mixins.toolbar,
        noteContainer: {
            padding: theme.spacing(3)
        },
        LayoutTitle: {
            padding: theme.spacing(2)
        },
        setFlexGrow: {
            flexGrow: '1'
        }
    }
})

export const useStyles2 = makeStyles({
    setAvatarColor: {
        backgroundColor: (note) => {
            if (note.category == 'work') {
              return yellow[700]
            }
            if (note.category == 'money') {
              return green[500]
            }
            if (note.category == 'todos') {
              return pink[500]
            }
            return blue[500]
          },
    }
})