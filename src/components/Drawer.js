import React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import { makeStyles, withStyles } from '@material-ui/core/styles/';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import BookIcon from '@mui/icons-material/Book';
import ChatIcon from '@mui/icons-material/Chat';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom/';
import Divider from '@mui/material/Divider';
import { toUpper } from 'lodash';

const useStyles = makeStyles((theme) => ({
    root: {
        color: 'black',
        textDecoration: 'none'
    },
    button: {
        height: '48px',
    }
}));

const MenuListItem = withStyles({
    root: {
        '&:hover': {
            backgroundColor: '#ffccbc !important',
        }
    }
})(ListItem)


function toUpperCaseFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export default function Drawer() {
    const [state, setState] = React.useState({
        right: false,
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
    const iconColor = '#ff5722';
    const classes = useStyles();
    const routes = ['home', 'wiki', 'draft', 'dictionary'];
    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role='presentation'
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <Link className={classes.root} to={`/`}>
                    <MenuListItem button key={routes[0]}>
                        <ListItemIcon><HomeIcon style={{ fill: iconColor }}></HomeIcon>
                        </ListItemIcon>
                        <ListItemText primary={toUpperCaseFirst(routes[0])} />
                    </MenuListItem>
                </Link>
                <Divider />
                <Link className={classes.root} to={`/${routes[1]}`}>
                    <MenuListItem button key={routes[1]}>
                        <ListItemIcon><BookIcon style={{ fill: iconColor }}></BookIcon>
                        </ListItemIcon>
                        <ListItemText primary={toUpperCaseFirst(routes[1])} />
                    </MenuListItem>
                </Link>
                <Link className={classes.root} to={`/${routes[2]}`}>
                    <MenuListItem button key={routes[2]}>
                        <ListItemIcon><BookIcon style={{ fill: iconColor }}></BookIcon>
                        </ListItemIcon>
                        <ListItemText primary={toUpperCaseFirst(routes[2])} />
                    </MenuListItem>
                </Link>
                <Link className={classes.root} to={`/${routes[3]}`}>
                    <MenuListItem button key={routes[3]}>
                        <ListItemIcon><BookIcon style={{ fill: iconColor }}></BookIcon>
                        </ListItemIcon>
                        <ListItemText primary={toUpperCaseFirst(routes[3])} />
                    </MenuListItem>
                </Link>
                <Divider />
                <MenuListItem button className={classes.button} key={'mailing-list'} component='a' href={'https://lists.schokokeks.org/mailman/listinfo.cgi/folksprak'} rel='noreferrer' target='_blank' >
                    <ListItemIcon><MailIcon style={{ fill: iconColor }}></MailIcon>
                    </ListItemIcon>
                    Mailing List
                </MenuListItem>
                <MenuListItem button className={classes.button} key={'chat'} component='a' href={'https://kiwiirc.com/nextclient/irc.libera.chat/?nick=sprekar_?&theme=cli##folksprak'} rel='noreferrer' target='_blank'>
                    <ListItemIcon><ChatIcon style={{ fill: iconColor }}></ChatIcon>
                    </ListItemIcon>
                    Chat
                </MenuListItem>
            </List>
        </Box>
    );

    return (
        <div>
            <React.Fragment key={'right'}>
                <IconButton onClick={toggleDrawer('right', true)}
                    size='large'
                    edge='start'
                    color='inherit'
                    aria-label='menu'
                    sx={{ mr: 2 }}
                ><MenuIcon /></IconButton>
                <SwipeableDrawer
                    anchor={'right'}
                    open={state['right']}
                    onClose={toggleDrawer('right', false)}
                    onOpen={toggleDrawer('right', true)}
                >
                    {list('right')}
                </SwipeableDrawer>
            </React.Fragment>
        </div>
    );
}