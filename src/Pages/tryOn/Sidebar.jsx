import React from 'react'
import { Box, Paper } from '@mui/material'
import '@fontsource/poppins'

export const Sidebar = () => {
  return (
    <>
    <Paper
    className='Sidebar'
    sx={{ 
        backgroundColor: '#f5f9ff',
        position: 'sticky',
        zIndex: '1000',
        minHeight: '100%',
        top: 0,
        height: '100dvh',
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        borderRight: '1px solid #bebebe'
        }}>
    </Paper>
    </>
  )
}
