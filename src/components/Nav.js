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
import '../stylesheets/nav.css'


const menuItems = {
  wiki: 'Wiki',
  draft: 'Draft',
  dictionary: 'Dictionary',
}

const myTheme = createTheme({
  palette: {
    primary: {
      main: '#ff5722',
    },
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
  logo: {
    position: 'absolute',
    left: '5%',
    fontFamily: '"Londrina Outline"',
    color: 'white',
    fontSize: '2.5em',
    top: 5,
    fontWeight: '400'
  },
  logosm: {
    position: 'absolute',
    right: '5%',
    fontFamily: '"Londrina Outline"',
    color: 'white',
    fontSize: '2.5em',
    top: 5,
    fontWeight: '400'
  }
}));

export default function Nav() {
  const classes = useStyles();
  const matches = useMediaQuery(myTheme.breakpoints.down('sm'));
  return (
    <ThemeProvider theme={myTheme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar elevation={0} position="static" >
          <Toolbar sx={{ flexGrow: 1 }} className={classes.appBar}>
            {!matches ? (<>
              <span id="logo" className={classes.logo}><Link to="/">folksprak</Link></span>
              <MenuList sx={{ flexGrow: 1 }} >
                {Object.entries(menuItems).map(([key, value]) => (
                  <Link className={classes.root} key={'k' + key} to={`#${key}`}>
                    <ListItem className={'top-link'} key={'k' + key}>
                      {value}
                    </ListItem>
                  </Link>
                ))}
                <div className={classes.root}><ListItem id="mailing-list" className={'top-link'} component="a" href={"https://lists.schokokeks.org/mailman/listinfo.cgi/folksprak"} rel="noreferrer" target='_blank'>Mailing List</ListItem></div>
                <div className={classes.root}><ListItem id="chat" className={'top-link'} component="a" href={"https://kiwiirc.com/nextclient/irc.libera.chat/?nick=sprekar_?&theme=cli##folksprak"} rel="noreferrer" target='_blank'>Chat</ListItem></div>

              </MenuList></>) : <><span id="logosm" className={classes.logosm}><Link to="/">folksprak</Link></span><Drawer /></>}
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
