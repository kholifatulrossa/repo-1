import React from 'react';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Header from '../dashboard/Header';
import { useTheme } from '@mui/joy/styles';
import FourCard from './Card/FourCard';
import Clock from './Card/Clock'
import CustomTable from '../dashboard/Table';
import Sidebar from '../dashboard/Sidebar';


export const MainDash = () => {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        {/* disini bisa beruoa sidebar */}
        <Box>
          <Box sx={{ padding: '20px', maxWidth: '100vw', maxHeight: 'auto'}}>{/* ini adalah box untuk kalimat welcome */}
            <Typography
              level="p"
              sx={{
                fontWeight: '500',
                fontSize: 20,
                color: 'black',
              }}>
              Selamat Datang, Admin! <br /> <span className="font-normal text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, rem?</span>
            </Typography>
          </Box>
          <Box /* ini adalah box atas box untuk wadah CLOCK, FOURCARD, TABLE */ 
         sx={{
          display: 'flex',
          mb: 5,
          gap: 1,
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'start', sm: 'center' },
          mx: 3,
          mb: 2,
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          color: 'black',
        }}>
        <Box> {/* ini adalah box untuk wadah CLOCK, FOURCARD, TABLE */}
          <Clock/>
          <FourCard/>
          <CustomTable paddingTop="20px"/>
        </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default MainDash;

