import React from 'react';
import {
  Card, CardContent, Typography, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Menu, MenuItem, InputBase
} from '@mui/material';
import { Box, Button } from '@mui/joy';
import '@fontsource/poppins'
import SearchIcon from '@mui/icons-material/Search';
import PDFIcon from '../../assets/icons/eksporPDF.png'
import imageProfil from '../../assets/profile.png';
import { useState, useEffect
 } from 'react';
 import axios from 'axios';
 import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

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

export default function CustomTable() {

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };


  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };



  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://localhost:3000/api/siswa')
      .then(response => {
        setData(response.data[0])
      })
      .catch(error => {
        console.error('There was an error fetching the data', error)
      })
  }, [])
  return (
    <Box>
      <Box sx={{ display :'flex', justifyContent: 'flex-end', gap: '10px'}}>
        <Button sx={{ padding: '14px 30px', backgroundColor: '#f5f5f9', color: 'gray', fontFamily: 'poppins', '&:hover': {backgroundColor: '#f5f5f9'}}}
          aria-controls={open ? 'dropdown-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          >
            Filter <span><KeyboardArrowDownRoundedIcon/></span>
        </Button>
        <Menu
          id="dropdown-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'dropdown-button',
          }}
        >
          {/* Dropdown items */}
          <MenuItem onClick={handleClose}>Option 1</MenuItem>
          <MenuItem onClick={handleClose}>Option 2</MenuItem>
          <MenuItem onClick={handleClose}>Option 3</MenuItem>
        </Menu>
        <Button sx={{ padding: '14px 30px', paddingRight: '55px', color: 'gray', backgroundColor: '#f5f5f9', fontFamily: 'poppins', '&:hover': {backgroundColor: '#f5f5f9'} }}><SearchIcon sx={{ marginRight: '10px'}}/> 
        <InputBase
          sx={{ flex: 1, fontFamily: 'poppins', color: 'gray' }}
          placeholder="Cari"
          inputProps={{ 'aria-label': 'search' }}
          value={searchQuery}
          onChange={handleSearchChange}
        />
        </Button>
        <Button sx={{ padding: '14px 30px', color: 'white', backgroundColor: '#F15C5C' }}><img src={PDFIcon} alt="PDF icon" style={{ width: '25px', height: '25px', marginRight: '10px',  }}/>Ekspor PDF</Button>
      </Box>
        <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
        {/* Table Section */}
        <Grid item xs={12} md={12}>
          <TableContainer component={Paper}>
            <Table sx={{ width: '100%', border: 'none' }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontSize: '18px', fontFamily: 'poppins' }} align="center">No</TableCell>
                  <TableCell sx={{ fontSize: '18px', fontFamily: 'poppins' }} align="center">Nama</TableCell>
                  <TableCell sx={{ fontSize: '18px', fontFamily: 'poppins' }} align="center" >Kelas</TableCell>
                  <TableCell sx={{ fontSize: '18px', fontFamily: 'poppins' }} align="center" >Jurusan</TableCell>
                  <TableCell sx={{ fontSize: '18px', fontFamily: 'poppins' }} align="center" >Keterangan</TableCell>
                  <TableCell sx={{ fontSize: '18px', fontFamily: 'poppins' }} align="center" >Hadir</TableCell>
                  <TableCell sx={{ fontSize: '18px', fontFamily: 'poppins' }} align="center" >Pulang</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row, index) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="center"sx={{ fontFamily: 'poppins' }} >{index + 1}</TableCell>
                    <TableCell align="center"sx={{ fontFamily: 'poppins' }} > {row.nama}</TableCell>
                    <TableCell align="center"sx={{ fontFamily: 'poppins' }} >{row.calories}</TableCell>
                    <TableCell align="center"sx={{ fontFamily: 'poppins' }} >{row.fat}</TableCell>
                    <TableCell align="center"sx={{ fontFamily: 'poppins' }} >{row.carbs}</TableCell>
                    <TableCell align="center"sx={{ fontFamily: 'poppins' }} >{row.protein}</TableCell>
                    <TableCell align="center"sx={{ fontFamily: 'poppins' }} >{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      </Box>
  );
}
