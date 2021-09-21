import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuList from '@mui/material/MenuList';
import ListItem from '@mui/material/ListItem';
import { BrowserRouter as Router, Link } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import Drawer from './Drawer'
import amber from '@material-ui/core/colors/amber';
import red from '@material-ui/core/colors/red';

const menuItems = {
  wiki: 'Wiki',
  draft: 'Draft',
  dictionary: 'Dictionary',
}

const myTheme = createTheme({
  palette: {
    primary: red,
    secondary: amber,
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'white',
    display: 'inline-block',
    textDecoration: 'none',
    alignItems: 'flex-start',
  },
  appBar: {
    backgroundColor: myTheme.palette.primary.main,
  },
  simpleLink: {
    padding: '8px 16px',
    color: 'white',
    display: 'inline-block',
    textDecoration: 'none',
  },
}));

export default function Nav() {
  const classes = useStyles();
  const matches = useMediaQuery(myTheme.breakpoints.down('sm'));
  return (
    <ThemeProvider theme={myTheme}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar sx={{ flexGrow: 1 }} className={classes.appBar}>
          {!matches ? (<MenuList sx={{ flexGrow: 1 }} >
            <Router>
              {Object.entries(menuItems).map(([key, value]) => (
                <Link className={classes.root} key={'k' + key} to={`#${key}`}>
                  <ListItem key={'k' + key}>
                    {value}
                  </ListItem>
                </Link>
              ))}
              <a href={"https://lists.schokokeks.org/mailman/listinfo.cgi/folksprak"} rel="noreferrer" className={classes.simpleLink} target='_blank' >Mailing List</a>
              <a href={"https://kiwiirc.com/nextclient/irc.libera.chat/?nick=sprekar_?&theme=cli##folksprak"} rel="noreferrer" className={classes.simpleLink} target='_blank' >Chat</a>
            </Router>
          </MenuList>) : <Drawer />}
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}
