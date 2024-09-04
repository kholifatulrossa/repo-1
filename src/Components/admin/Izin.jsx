import { Box, Button, Sheet, Typography } from '@mui/joy'
import React from 'react'
import Header from '../Header'
import Sidebar from '../dashboard/Sidebar'
import { Image } from '@mui/icons-material'
import CustomTable from '../izin/Table'

export const Izin = () => {
  return (
    <>
    <Box>
    <Header/>
    <CustomTable/>
    </Box>
    </>
  )
}
export default Izin;
