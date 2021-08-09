// Router-dom and React
import { useHistory, useLocation } from 'react-router-dom';
import {format} from 'date-fns'
// material UI
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';
// Pages & Components
import { useStyles } from './AllStyles';

const Layout = ({children}) =>{
    // Hooks & variables
    const classes = useStyles();
    const location = useLocation(); // here is the path of the current page
    const history = useHistory();
    const AllListData = [
        {
            path: '/',
            text: 'my notes',
            icon: <SubjectOutlined color="secondary"/>
        },
        {
            path: '/create',
            text: 'create a note',
            icon: <AddCircleOutlineOutlined color="secondary"/>
        }
    ]

    return(
     <div className={classes.rootLayout}>
         <AppBar className={classes.AppBarStyle} color='default' elevation={1}>
             <Toolbar>
                <Typography className={classes.setFlexGrow}>
                  today is { format(new Date(), 'do MMMM Y')}  
                </Typography>
                <Typography>
                  Ahmed Sadek 
                </Typography>
                <Avatar src='me.jpg'/>
             </Toolbar>
         </AppBar>
         <Drawer 
           className={classes.setDrawer}
           variant="permanent"
           anchor="left"
           classes={{paper: classes.setDrawer}}
           >
               <Typography
                 variant="h6"
                 className={classes.LayoutTitle}
               >
                     create AppNotes
               </Typography>
               {
                   AllListData.map(list =>{
                    return(
                        <List key={list.text}>
                           <ListItem
                            button
                            onClick={() => history.push(list.path)}
                            className={location.pathname === list.path ? classes.ActiveItemList : null}
                           >
                               <ListItemText 
                                primary={list.text}
                               />
                               <ListItemIcon>
                                   {list.icon}
                               </ListItemIcon>
                           </ListItem>
                       </List>
                    )
                   })
               }

        </Drawer>
        <div>
        <div className={classes.pages}></div>
            {children}
        </div>
     </div>
    )
}

export default Layout;
