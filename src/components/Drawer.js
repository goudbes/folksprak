import React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import BookIcon from '@mui/icons-material/Book';
import ChatIcon from '@mui/icons-material/Chat';
import MailIcon from '@mui/icons-material/Mail';

const useStyles = makeStyles((theme) => ({
    root: {
        color: 'black',
        textDecoration: 'none'
    },
}));

export default function Drawer() {
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const classes = useStyles();
    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem button key={'wiki'}>
                    <ListItemIcon><BookIcon></BookIcon>
                    </ListItemIcon>
                    <ListItemText primary={'Wiki'} />
                </ListItem>
                <ListItem button key={'draft'}>
                    <ListItemIcon><BookIcon></BookIcon>
                    </ListItemIcon>
                    <ListItemText primary={'Draft'} />
                </ListItem>
                <ListItem button key={'dictionary'}>
                    <ListItemIcon><BookIcon></BookIcon>
                    </ListItemIcon>
                    <ListItemText primary={'Dictionary'} />
                </ListItem>
                <ListItem button key={'mailing-list'} component="a" href={"https://lists.schokokeks.org/mailman/listinfo.cgi/folksprak"} rel="noreferrer" target='_blank' >
                    <ListItemIcon><MailIcon></MailIcon>
                    </ListItemIcon>
                    Mailing List
                </ListItem>
                <ListItem button key={'chat'} component="a" href={"https://kiwiirc.com/nextclient/irc.libera.chat/?nick=sprekar_?&theme=cli##folksprak"} rel="noreferrer" target='_blank'>
                    <ListItemIcon><ChatIcon></ChatIcon>
                    </ListItemIcon>
                    Chat
                </ListItem>
            </List>
        </Box>
    );

    return (
        <div>
            <React.Fragment key={'left'}>
                <IconButton onClick={toggleDrawer('left', true)}
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                ><MenuIcon /></IconButton>
                <SwipeableDrawer
                    anchor={'left'}
                    open={state['left']}
                    onClose={toggleDrawer('left', false)}
                    onOpen={toggleDrawer('left', true)}
                >
                    {list('left')}
                </SwipeableDrawer>
            </React.Fragment>
        </div>
    );
}