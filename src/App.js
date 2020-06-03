import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
//------------------------------------------ My Own Styles
import './App.css'
//------------------------------------------ Components
import AboutMe from './components/about-me-component/aboutMe'
import Skills from './components/skills-components/skills'
import Education from './components/education-component/education'
import Projects from './components/projects-component/projects'
import Contact from './components/contact-component/contact'
//------------------------------------------ Icons
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import CodeIcon from '@material-ui/icons/Code';
import SchoolIcon from '@material-ui/icons/School';
import WebIcon from '@material-ui/icons/Web';
import GetAppIcon from '@material-ui/icons/GetApp';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);',

  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar className='upBar'>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Yagel Salazar Reyes (Web Developer)
          </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            <Link className='links' to="/">
              <ListItem button key='aboutMe'>
                <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                <ListItemText primary='About Me' />
              </ListItem>
            </Link>
            <Link className='links' to="/skills">
              <ListItem button key='skills'>
                <ListItemIcon><CodeIcon /></ListItemIcon>
                <ListItemText primary='Skills' />
              </ListItem>
            </Link>
            <Link className='links' to="/education">
              <ListItem button key='education'>
                <ListItemIcon><SchoolIcon /></ListItemIcon>
                <ListItemText primary='Education' />
              </ListItem>
            </Link>
            <Link className='links' to="/projects">
              <ListItem button key='projects'>
                <ListItemIcon><WebIcon /></ListItemIcon>
                <ListItemText primary='Public Projects' />
              </ListItem>
            </Link>

          </List>
          <Divider />
          <List>
            <Link className='links' to="/contact-me">
              <ListItem button key='contactMe'>
                <ListItemIcon><MailIcon /></ListItemIcon>
                <ListItemText primary='Contact Me' />
              </ListItem>
            </Link>
            <Link className='links' to="/YagelSalazarR(resume).pdf" target='_blank' download>
              <ListItem button key='downloadResume'>
                <ListItemIcon><GetAppIcon /></ListItemIcon>
                <ListItemText primary='Download Résumé' />
              </ListItem>
            </Link>
          </List>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <Switch>
            <Route path="/skills">
              <Skills></Skills>
            </Route>
            <Route path="/education">
              <Education></Education>
            </Route>
            <Route path="/projects">
              <Projects></Projects>
            </Route>
            <Route path="/contact-me">
              <Contact></Contact>
            </Route>
            <Route path="/download-resume"></Route>
            <Route path="/">
              <AboutMe></AboutMe>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}