import { Box, CssBaseline, CssVarsProvider } from '@mui/joy';
import React from 'react'
import Sidebar from '../Components/dashboard/Sidebar';
import Header from '../Components/dashboard/Header';
import { Outlet } from 'react-router-dom';
import MainDash from '../Components/admin/MainDashboard';

const DashboardPage = () => {
  return (
  <>
    <CssVarsProvider disableTransitionOnChange>
        <Box sx={{ display: 'flex' }}>
            <Sidebar/>
            <Box>
            <Header/>
            <Box
            component="main"
            className="MainContent"
            sx={{
                pt: { xs: 'calc(12px + var(--Header-height))', md: 0 },
                pb: { xs: 2, sm: 2, md: 3 },
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                minWidth: 0,
                height: '100dvh',
                gap: 1,
                overflowX: 'hidden',
            }}>
                <Outlet/> 
            </Box>
            </Box>
        </Box>
    </CssVarsProvider>
  </>
  )
}

export default DashboardPage;