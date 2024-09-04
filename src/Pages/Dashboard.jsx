// import * as React from 'react';
// import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
// import { CssBaseline, Box, List, Typography, Divider, IconButton, Badge, Container, Grid, Link } from '@mui/joy';
// // import CssBaseline from '@mui/material/CssBaseline';
// import MuiDrawer from '@mui/material/Drawer';
// // import Box from '@mui/material/Box';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// // import List from '@mui/material/List';
// // import Typography from '@mui/material/Typography';
// // import Divider from '@mui/material/Divider';
// // import IconButton from '@mui/material/IconButton';
// // import Badge from '@mui/material/Badge';
// // import Container from '@mui/material/Container';
// // import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// // import Link from '@mui/material/Link';
// import MenuIcon from '@mui/icons-material/Menu';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// // import mainListItems from '../Components/ListItems';
// import Sidebar from '../Components/Sidebar';
// import HomeIcon from '@mui/icons-material/Home';
// import '../App.css'
// import FourCard from '../Components/Card/FourCard';
// import Clock from '../Components/Card/Clock';
// import CustomTable from '../Components/Card/Table';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website   
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const drawerWidth = 270;

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     '& .MuiDrawer-paper': {
//       position: 'relative',
//       whiteSpace: 'nowrap',
//       width: drawerWidth,
//       transition: theme.transitions.create('width', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       boxSizing: 'border-box',
//       ...(!open && {
//         overflowX: 'hidden',
//         transition: theme.transitions.create('width', {
//           easing: theme.transitions.easing.sharp,
//           duration: theme.transitions.duration.leavingScreen,
//         }),
//         width: theme.spacing(7),
//         [theme.breakpoints.up('sm')]: {
//           width: theme.spacing(9),
//         },
//       }),
//     },
//   }),
// );

// // TODO remove, this demo shouldn't need to reset the theme.
// const defaultTheme = createTheme();

// export default function Dashboard() {
//   const [open, setOpen] = React.useState(true);
//   // const toggleDrawer = () => {
//   //   setOpen(!open);
//   // };

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Box sx={{ display: 'flex'}}>
//         <AppBar  open={open}>
//           <Box // kotak ini adalah navbar di atas
//           sx={{ 
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             height: '7vh',
//             backgroundColor: '#ffffff'
//            }}>
//             <Typography // ini untuk tulisan Dashboard di atas
//               component="h1"
//               variant="h6"
//               color="#1E1E1E"
//               sx={{ flexGrow: 1 }}
//               fontFamily='poppins'
//               marginLeft={4}
//               fontWeight={600}
//             >
//               Dashboard
//             </Typography>
//           </Box>
//         </AppBar>
//         <Drawer variant="permanent" open={open}>
//           <Box sx={{ backgroundColor: '#f5f9ff', height: '100vh', width: 'auto'}}> { /* ini adalah bg sidebar */}
//             <Toolbar // ini adalah area logo
//               sx={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'flex-start',
//                 px: [1],
//                 pb: 4,
//                 backgroundColor: ''
//               }}
//             >
//               <Box paddingLeft={3} paddingTop={5}> {/* ini adalah box untuk logo */}
//               </Box>
//             </Toolbar>
//             <List component="nav" backgroundColor="#ff0000" >
//               {mainListItems}
//             </List>
//             <Box sx={{ 
//               paddingLeft: 4
//             }}>
//               <Box component="image" sx={{ width: '100%', height: 'auto' }} alt="exampple" src="../assets/profile.png"/>
//               <Typography
//               sx={{ 
//                 fontFamily: 'poppins'
//               }}>
//                 Hello
//               </Typography>
//               </Box>
//             </Box>
//         </Drawer>
//         <Box
//           component="main"
//           sx={{
//             backgroundColor: 'white',
//             flexGrow: 1,
//             height: '100vh',
//             width: '100%'
//           }}
//         >
//           <Toolbar />
//           <Box
//           sx={{ padding: '30px' }}>
//             <Typography
//             sx={{ 
//               fontFamily: 'poppins',
//               fontSize: '30px',
//               fontWeight: '500'
//              }}>
//               Hello, admin
//              </Typography>
//              <Typography
//              sx={{ 
//               fontFamily: 'poppins',
//               fontSize: '18px'
//               }}>
//               Silahkan melakukan presensi sebelum pukul 07.00 
//              </Typography>
//           </Box>
//           <Container maxWidth="lg">
//             <Grid 
//               container 
//               spacing={3} 
//               alignItems="center"  // Center grid items vertically
//               justifyContent="center"  // Center grid items horizontally if needed
//               margin={0}
//               width='100%'
//               XS={12}
//             >
//               <Grid item xs="auto">
//                 <Paper
//                   sx={{
//                     p: 7,
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     width: 'auto',
//                     height: 'auto',
//                     margin: 0
//                   }}
//                 >
//                   <Clock />
//                 </Paper>
//               </Grid>

//               <Grid item xs="auto">
//                 <Paper
//                   sx={{
//                     p: 2,
//                     display: 'inline-flex',
//                     flexDirection: 'column',
//                     alignItems: 'center',  // Center content inside Paper
//                     justifyContent: 'center',  // Center content inside Paper
//                     width: 'auto',
//                     height: 'auto',
//                     margin: 0
//                   }}
//                 >
//                   <FourCard />
//                 </Paper>
//               </Grid>
//             </Grid>

//             <CustomTable/>

//             <Copyright sx={{ pt: 4 }} />
//           </Container>


//         </Box>
//       </Box>
//     </ThemeProvider>
//   );
// }


// import React from 'react'

// export const Mai = () => {
//   return (
//     <div>Dashboard</div>
//   )
// }
