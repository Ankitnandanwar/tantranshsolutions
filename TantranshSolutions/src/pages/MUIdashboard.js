import React,{useState} from 'react';
import {ThemeProvider, styled, useTheme, createTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PagesIcon from '@mui/icons-material/Pages';
import WorkIcon from '@mui/icons-material/Work';
import EngineeringIcon from '@mui/icons-material/Engineering';
import Mainbar from '../components/AdminPanel/Mainbar';
import WebsiteDashboard from '../components/AdminPanel/WebsiteDashboard';

const drawerWidth = 290;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const colorTheme = createTheme({
  palette: {
    primary: {
      main: '#fafafa'
    },
  },
});
const darkTheme = createTheme({
  palette: {
    main:"white"
  },
});

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [menuData, setMenuData] = useState('Dashboard')
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <ThemeProvider theme={colorTheme}>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" sx={{marginRight: 5, ...(open && { display: 'none' }),}}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      </ThemeProvider>

      <ThemeProvider theme={darkTheme}>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>setMenuData('Dashboard')}>
              <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }}>
                <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center'}}>
                  {<PermIdentityIcon/>}
                </ListItemIcon>
                <ListItemText primary= "Profile" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>                
        </List>
        <List>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>setMenuData('Analytics')}>
              <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }}>
                <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center'}}>
                  {<PagesIcon/>}
                </ListItemIcon>
                <ListItemText primary= "Department" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>                 
        </List>
        <List>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>setMenuData('Charts')}>
              <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }}>
                <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center'}}>
                  {<EngineeringIcon/>}
                </ListItemIcon>
                <ListItemText primary= "Employee Details" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>                 
        </List>

        <List>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>setMenuData('Widgets')}>
              <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }}>
                <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center'}}>
                  {<WorkIcon/>}
                </ListItemIcon>
                <ListItemText primary= "Job Details" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>                 
        </List>

        <Divider />
        <List>
            
        </List>
      </Drawer>
      </ThemeProvider>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader/>
        {menuData === 'Dashboard' && <Mainbar/>}
        {menuData === 'Charts' && <WebsiteDashboard/>}
        {/* {menuData === 'Widgets' && <Widgets/>} */}
      </Box>
    </Box>
  );
}