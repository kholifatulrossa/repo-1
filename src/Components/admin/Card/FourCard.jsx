import React from 'react';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import OfflinePinRoundedIcon from '@mui/icons-material/OfflinePinRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';

const FourCard = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          width: '100vw',
          justifyContent: 'space-evenly'
        }}
      >
        <Box sx={{ p: 1 }}>
          <Box
            sx={{
              bgcolor: '#E6EFFF',
              width: '23.5vw',
              height: 'auto',
              padding: '30px 40px',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '20px'
            }}
          >
            {/* <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}> */}
            <Box>
              <Typography fontWeight="600" fontSize={20}>Total Presensi</Typography>
              <Typography fontWeight="700" fontSize="25px">150</Typography>
              <Typography fontWeight="700" fontSize="25px" sx={{ color: '#adbed8' }}>Detail</Typography>
            </Box>
            <AccessTimeFilledRoundedIcon sx={{ fontSize: '80px', paddingRight:'10px', color: '#5f84bf', fontWeight: 'bold' }} />
          </Box>
        </Box>
        <Box sx={{ p: 1 }}>
          <Box
            sx={{
              bgcolor: '#EAFFE3',
              width: '23.5vw',
              height: 'auto',
              padding: '30px 40px',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '20px'
            }}
          >
            <Box>
            <Typography fontWeight="600" fontSize={20}>Total Hadir</Typography>
            <Typography fontWeight="700" fontSize="25px">106</Typography>
            <Typography fontWeight="700" fontSize="25px" sx={{ color: '#b8d8ad' }}>Detail</Typography>

            </Box>
            <OfflinePinRoundedIcon sx={{ fontSize: '80px', paddingRight:'10px', color: '#77BF5F', fontWeight: 'bold' }}/>
          </Box>
        </Box>
      
        <Box sx={{ p: 1 }}>
          <Box
            sx={{
              bgcolor: '#FFE2E2',
              width: '23.5vw',
              height: 'auto',
              padding: '30px 40px',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            <Box>
              <Typography fontWeight="600" fontSize={20}>Total Alpa</Typography>
              <Typography fontWeight="700" fontSize="25px">26</Typography>
              <Typography fontWeight="700" fontSize="25px" sx={{ color: '#d5adad' }}>Detail</Typography>

            </Box>
            <CancelRoundedIcon sx={{ fontSize: '80px', paddingRight:'10px', color: '#e06969', fontWeight: 'bold' }}/>   
          </Box>
        </Box>
        <Box sx={{ p: 1 }}>
          <Box
            sx={{
              bgcolor: '#FEFFD3',
              width: '23.5vw',
              height: 'auto',
              padding: '30px 40px',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '20px'
            }}
          >
            <Box>
            <Typography fontWeight="600" fontSize={20}>Total Telat</Typography>
            <Typography fontWeight="700" fontSize={20}>18</Typography>
            <Typography fontWeight="700" fontSize="25px" sx={{ color: '#f4ed9f' }}>Detail</Typography>

            </Box>
             <ErrorRoundedIcon sx={{ fontSize: '80px', paddingRight:'10px', color: '#EFE358', fontWeight: 'bold' }}/> 
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FourCard;
