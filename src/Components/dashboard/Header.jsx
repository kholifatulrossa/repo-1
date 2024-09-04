import React from 'react';
import { Box, Divider, Typography } from '@mui/joy';

export default function Header() {
  return (
    <>
    <Box
     className="header"
     sx={{ 
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        height: 70,
        py: 2,
        mx: 3
      }}>
        <Typography
        level="tittle-lg"
        component="p"
        style={{ fontFamily: 'poppins' }}
        sx={{ 
            fontWeight: 'bold',
            color: 'black'
         }}>
            Dashboard
         </Typography>
     </Box>
    <Divider/>
    </>
  )
}
