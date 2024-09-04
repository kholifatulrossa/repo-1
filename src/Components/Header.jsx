import { Box, Typography } from '@mui/joy'
import { Divider } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()
  const getHeaderText = () => {
    switch (location.pathname){
      case '/admin/perizinan':
        return "Permohonan Izin";
      case '/admin/dataKelas':
        return "Data Kelas"
    }
  }
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
            {getHeaderText()}
         </Typography>
     </Box>
     <Divider
     orientation="horizontal"
     sx={{
        mb: 4
        }}/>
    </>
  )
}
