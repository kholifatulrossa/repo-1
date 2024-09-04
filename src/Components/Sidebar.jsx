// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Grid from '@mui/material/Grid';
// import Stack from '@mui/material/Stack';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';

// function Sidebar(props) {
//   const { archives, description, social, title } = props;

//   return (
//     <Grid item xs={12} md={4}>
//       <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
//         <Typography variant="h6" gutterBottom>
//           {title}
//         </Typography>
//         <Typography>{description}</Typography>
//       </Paper>
//       <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
//         Archives
//       </Typography>
//       {archives.map((archive) => (
//         <Link display="block" variant="body1" href={archive.url} key={archive.title}>
//           {archive.title}
//         </Link>
//       ))}
//       <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
//         Social
//       </Typography>
//       {social.map((network) => (
//         <Link
//           display="block"
//           variant="body1"
//           href="#"
//           key={network.name}
//           sx={{ mb: 0.5 }}
//         >
//           <Stack direction="row" spacing={1} alignItems="center">
//             <network.icon />
//             <span>{network.name}</span>
//           </Stack>
//         </Link>
//       ))}
      
//     </Grid>
    
//   );
// }

// {/* <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', height: 60 }}>
//           <Avatar variant="outlined" size="lg" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286" />
//           <Box sx={{ minWidth: 0, flex: 1 }}>
//             <Typography level="title-lg">Siriwat K.</Typography> {/* ini adalah nama pe 
//             <Typography level="body-md">siriwatk@test.com</Typography>
//           </Box>
//           <IconButton size="md" variant="plain" color="danger">
//             <LogoutRoundedIcon />
//           </IconButton>
//         </Box> */}

// Sidebar.propTypes = {
//   archives: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       url: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
//   description: PropTypes.string.isRequired,
//   social: PropTypes.arrayOf(
//     PropTypes.shape({
//       icon: PropTypes.elementType,
//       name: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
//   title: PropTypes.string.isRequired,
// };

// export default Sidebar;


import React, { useState } from 'react';
import GlobalStyles from '@mui/joy/GlobalStyles';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import IconButton from '@mui/joy/IconButton';
import List from '@mui/joy/List';
import { Link } from 'react-router-dom';
import ListItem from '@mui/joy/ListItem';
import ListItemButton, { listItemButtonClasses } from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import { HistoryRounded } from '@mui/icons-material';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import Logo from '../assets/logo.png'
import DraftsIcon from '@mui/icons-material/Drafts';
import ClassRoundedIcon from '@mui/icons-material/ClassRounded';

const ListItemWithIcon = ({ IconComponent, text, href, onClick, selected, children }) => {
  return (
    <ListItem
      sx={{
        gap: 1.5,
      }}>
      <Link to={href} style={{ textDecoration: 'none', display: 'flex' }}>
        <ListItemButton
          onClick={onClick}
          component={href ? 'a' : 'div'}
          href={href}
          sx={{
            bgcolor: selected ? '#7AA2E3' : 'white',
            width: 250,
            py: 1,
            mt: 1,
            '&hover' : {
              bgcolor: '#7AA2E3',
              }
            
          }}>
          <IconComponent
            sx={{
              fontSize: '26px',
              color: selected ? 'white' : 'black',
            }}
          />
          <Typography
            sx={{
              color:  selected ? 'white' : 'black',
            }}
            className="MuiTypography-root"
            level="title-sm">
            {text}
          </Typography>
          {children}
        </ListItemButton>
      </Link>
    </ListItem>
  );
};

export default function Sidebar() {
  const [selected, setSelected] = useState(false);
  const [showChip, setShowChip] = useState(true);

  const handleClick = (item) => {
    setSelected(item);
    if (item === 'users') {
      setShowChip(false);
    }
  };

  return (
    <Sheet
      className="Sidebar"
      sx={{
        position: { xs: 'fixed', md: 'sticky' },
        transform: {
          xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))',
          md: 'none',
        },
        transition: 'transform 0.4s, width 0.4s',
        zIndex: 10000,
        height: '100dvh',
        width: 'var(--Sidebar-width)',
        top: 0,
        p: 2,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        borderRight: '1px solid',
        borderColor: 'divider',
        bgcolor: 'white'
      }}>
      <Box
        className="Sidebar-overlay"
        sx={{
          position: 'fixed',
          zIndex: 9998,
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'var(--joy-palette-background-backdrop)',
          transition: 'opacity 0.4s',
          transform: {
            xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))',
            lg: 'translateX(-100%)',
          },
        }}
        onClick={() => closeSidebar()}
      />
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        <IconButton variant="soft" size="sm" >
          {/* <img src={Logo} alt="Logo" style={{opacity: 0.5}}/> */}
        </IconButton>
        <Typography level="title-lg" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          Presen<span color="blue">Siswa</span>
        </Typography>
        {/* <ColorSchemeToggle sx={{ ml: 'auto' }} /> */}
      </Box>
      {/* <Input size="sm" startDecorator={<SearchRoundedIcon />} placeholder="Search" /> */}
      <Box
        sx={{
          minHeight: 0,
          overflow: 'hidden auto',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          [`& .${listItemButtonClasses.root}`]: {
            gap: 1.5,
          },
        }}>
        <List
          size="sm"
          sx={{
            gap: 1,
            '--List-nestedInsetStart': '30px',
            '--ListItem-radius': (theme) => theme.vars.radius.sm,
          }}>
          <div>
            <ListItemWithIcon IconComponent={HomeRoundedIcon} text="Dashboard" href="dashboard" selected={selected === 'home'} onClick={() => handleClick('home')} />
          </div>
        </List>
      </Box>

      <Divider />
      <Link to="/admin/profil" style={{ textDecoration: 'none', color: 'blue' }}>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', height: 60 }}>
          <Avatar variant="outlined" size="lg" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286" />
          <Box sx={{ minWidth: 0, flex: 1 }}>
            <Typography level="title-lg">Siriwat K.</Typography> {/* ini adalah nama pe */}
            <Typography level="body-md">siriwatk@test.com</Typography>
          </Box>
          <IconButton size="md" variant="plain" color="danger">
            <LogoutRoundedIcon />
          </IconButton>
        </Box>
      </Link>
    </Sheet>
  );
}
