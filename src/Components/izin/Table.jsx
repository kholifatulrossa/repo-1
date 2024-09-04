import React from 'react';
import {
  Card, CardContent, Grid,  TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox
} from '@mui/material';
import { Box, Button, Typography, Table } from '@mui/joy';
import '@fontsource/poppins'
import SearchIcon from '@mui/icons-material/Search';
import PDFIcon from '../../assets/icons/eksporPDF.png'
import { useState } from 'react';
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import CustomPopup from './PopUp';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function CustomTable(selected) {
    const [showCheckboxes, setShowCheckboxes] = useState(false);

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <Box>
      {/* <Box sx={{ display :'flex', justifyContent: 'flex-end', gap: '10px'}}>
        <Button sx={{ padding: '14px 30px', backgroundColor: '#f5f5f9', color: 'gray', fontFamily: 'poppins', '&:hover': {color: 'white', backgroundColor: '#ff0000', mixBlendMode: 'multiply'}}}>Filter</Button>
        <Button sx={{ padding: '14px 30px', paddingRight: '70px', color: 'gray', backgroundColor: '#f5f5f9', fontFamily: 'poppins' }}><SearchIcon sx={{ marginRight: '10px'}}/>Cari</Button>
        <Button sx={{ padding: '14px 30px', color: 'white', backgroundColor: '#F15C5C' }}><img src={PDFIcon} alt="PDF icon" style={{ width: '25px', height: '25px', marginRight: '10px',  }}/>Ekspor PDF</Button>
      </Box> */}
      
        <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ display: 'inline', marginRight: 0}}>
            <Button sx={{ padding: '15px 30px', fontSize: '17px', fontWeight: 'bold', backgroundColor: '#7AA2E3', display: 'flex', justifyContent: 'flex-end'}}>Tambah data</Button>
            <Button sx={{ padding: '15px 30px', fontSize: '17px', fontWeight: 'bold', margin: 'auto', marginLeft: 'auto', backgroundColor: '#7AA2E3', display: 'none'}}
            onClick={() => setShowCheckboxes(!showCheckboxes)}
        >
            {showCheckboxes ? 'Hide Checkboxes' : 'Show Checkboxes'}
        </Button>
        </Box>
        {/* Table Section */}
        <Grid item xs={10} md={11}>
          <TableContainer component={Paper}>
            <Table sx={{ width: '100%' }}>
              <TableHead>
                <TableRow>
                  <TableCell align="center" sx={{ fontSize: '18px', fontFamily: 'poppins' }} >No</TableCell>
                  <TableCell align="center" sx={{ fontSize: '18px', fontFamily: 'poppins' }} >Profil</TableCell>
                  <TableCell align="center" sx={{ fontSize: '18px', fontFamily: 'poppins' }} >Date</TableCell>
                  <TableCell align="center" sx={{ fontSize: '18px', fontFamily: 'poppins' }} >Operation</TableCell>
                  <TableCell align="center" sx={{ fontSize: '18px', fontFamily: 'poppins' }} >Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="left"sx={{ fontFamily: 'poppins' }} >{index + 1}</TableCell>
                    <TableCell align="left" sx={{ fontFamily: 'poppins' }}> {row.name}</TableCell>
                    <TableCell align="left"sx={{ fontFamily: 'poppins' }} >{row.fat}</TableCell>
                    <TableCell align="left"sx={{ fontFamily: 'poppins' }} >
                        <Button variant="contained" sx={{width: '40px', height: '40px', '&:hover': {backgroundColor: '#f5f5f9', borderRadius: '50px'}}} onClick={handleOpen}><ModeEditOutlineRoundedIcon/></Button>
                        <CustomPopup
                            open={open}
                            onClose={handleClose}
                            title="Custom Popup"
                        >
                            <Typography level="body1" sx={{ fontFamily: 'poppins' }}>
                                This is a custom pop-up message!
                            </Typography>
                        </CustomPopup>
                        <Button variant="contained" sx={{width: '40px', height: '40px', '&:hover': {backgroundColor: '#f5f5f9', borderRadius: '50px'}}}><DeleteRoundedIcon/></Button>
                    </TableCell>
                    <TableCell align="left"sx={{ fontFamily: 'poppins' }} >Accepted</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box>
            <Button sx={{ padding: '15px 30px', fontSize: '17px', fontWeight: 'bold', margin: '13px 0', marginLeft: 'auto', backgroundColor: '#7AA2E3' }}
            onClick={() => {
                const result = window.confirm("Do you want to accept all?")
                if(result){
                    console.log('Accepted')
                }else {
                    console.log('Cancelled')
                }
            }}>
                Accept All
                </Button>
          </Box>

          
        </Grid>
      </Grid>
      </Box>
  );
}
