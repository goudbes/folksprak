import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuList from '@mui/material/MenuList';
import ListItem from '@mui/material/ListItem';
import {BrowserRouter as Router,Link} from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from './Drawer'

const menuItems = {
  wiki: 'Wiki',
  draft: 'Draft',
  dictionary: 'Dictionary',
  mailingList: 'Mailing List',
  mailArchive: 'Mail Archive',
}

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'white',
    display: 'inline-block',
    textDecoration: 'none'
  },
  appBar: {
    backgroundColor: '#36486b'
  }
}));

export default function Nav() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className={classes.appBar}>
          {!matches ? (<MenuList sx={{ flexGrow: 1 }} >
            <Router>
              {Object.entries(menuItems).map(([key, value]) => (
                <Link className={classes.root} key={'k' + key} to={`#${key}`}>
                  <ListItem key={'k' + key}>
                    {value}
                  </ListItem>
                </Link>
              ))}
              <a href={"https://kiwiirc.com/nextclient/irc.libera.chat/?nick=sprekar_?&theme=cli##folksprak"} rel="noreferrer" className={classes.root} target='_blank' >Chat</a>
            </Router>
          </MenuList>) : <Drawer />}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
