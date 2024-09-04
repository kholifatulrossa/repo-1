import { Box, Typography } from '@mui/joy'
import React from 'react'
import Header from '../Header'
import ClassRoundedIcon from '@mui/icons-material/ClassRounded';
import '@fontsource/poppins'

export const DataKelas = () => {
  return (
    <>
    <Header/>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '30px 40px', flexWrap: 'wrap', maxWidth: '90vw'}}>
            <Box sx={{ backgroundColor: 'white', display: 'flex', alignItems: 'center', boxShadow: '0px 4px 10px 4px rgba(0, 0, 0, 0.1)', width: '27%', padding: '30px 30px'}}>
                <ClassRoundedIcon sx={{marginRight: '10px', fontSize: '50px', color: '#6f707d'}} />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '0 50px' }}>
                    <Typography sx={{  fontWeight: 'bold', fontSize: '25px', fontFamily: 'poppins'}}>XII RPL 1</Typography>
                    <Typography sx={{ fontWeight: '500', fontFamily: 'poppins', marginLeft: '0'}}>2024/2025</Typography>
                    </Box>
                <Typography sx={{ fontWeight: 'bold', fontFamily: 'poppins', fontSize: '18px' }}>36 Siswa</Typography>
                </Box>
            </Box>
            <Box sx={{ backgroundColor: 'white', display: 'flex', alignItems: 'center', boxShadow: '0px 4px 10px 4px rgba(0, 0, 0, 0.1)', width: '27%', padding: '30px 30px'}}>
                <ClassRoundedIcon sx={{marginRight: '10px', fontSize: '50px', color: '#6f707d'}} />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '0 50px' }}>
                    <Typography sx={{  fontWeight: 'bold', fontSize: '25px', fontFamily: 'poppins'}}>XII RPL 1</Typography>
                    <Typography sx={{ fontWeight: '500', fontFamily: 'poppins', marginLeft: '0'}}>2024/2025</Typography>
                    </Box>
                <Typography sx={{ fontWeight: 'bold', fontFamily: 'poppins', fontSize: '18px' }}>36 Siswa</Typography>
                </Box>
            </Box>
        </Box>
    </>
  )
}

export default DataKelas