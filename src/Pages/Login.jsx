
import { Input } from '@mui/joy';
import { Box, Button, Grid, Link, Typography } from '@mui/material';
import React, { useState } from 'react';
import '../App.css'
import axios from 'axios';

export default function Login() {
  const [nisn, setNisn] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try{
      const credentials = { nisn, nip, password };

      const response = await axios.post('https://localhost:3000/api/login')

      if(response.data.success){
        alert(response.data.message)
        window.location.href = 'admin/dashboard';
      }else {
        alert("Login gagal. Periksa kembali NISN dan password anda!")
      }
    }catch(error){
      console.error('Error: ', error)
      alert("An error occured")
    }
  }
  return (
    <>
        <Box
          sx={{
            height: '100vh',
            width: '100vw',
            backgroundRepeat: 'no-repeat',
            backgroundImage: 'linear-gradient(to right, #DFE6F2, #7AA2E3)',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}>
          <Box sx={{ width: '80%', height: '75%', borderRadius: 2, overflow: 'hidden', boxShadow: '0px 4px 10px 4px rgba(0, 0, 0, 0.1)' }}>
            <Grid container sx={{ height: '100%' }}>
              <Grid item xs={6} sx={{ bgcolor: '#7AA2E3' }}></Grid>
              <Grid item xs={6} sx={{ bgcolor: 'white', display: 'flex', alignItems: 'center' }}>
                <Box className="wrapper" sx={{ height: 'auto', width: '100%', px: 18 }}>
                  <Box className="tittle" display="flex" alignItems="center" sx={{ width: '100%', justifyContent: 'center', mb: 3 }}>
                    <img src="assets/fluent_people-eye.png" className="h-9 me-3" alt="Logo" />
                    <Typography textAlign="center" fontWeight={600} fontSize={30}>
                      Presen<span className="text-[#7AA2E3]">Siswa</span>
                    </Typography>
                  </Box>
                  <Box className="input-wrapper" pt={6}>
                    <Input
                      variant="solid"
                      // size="lg"
                      placeholder="NISN"
                      
                      // fill required 
                      value={nisn}
                      onChange={(e) => setNisn(e.target.value)}

                      sx={{
                        padding: 1,
                        paddingLeft: 3,
                        py: 1.5,
                        mb: 1.5,
                        borderRadius: 16,
                        bgcolor: '#D9D9D9',
                        color: '#696969',
                        '&::placeholder': {
                          color: '#696969',
                        },
                      }}
                    />
                    <Input
                      variant="solid"
                      // size="lg"
                      placeholder="Password"
                      
                      // fill required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}

                      sx={{
                        padding: 1,
                        paddingLeft: 3,
                        py: 1.5,
                        borderRadius: 16,
                        bgcolor: '#D9D9D9',
                        color: '#696969',
                        '&::placeholder': {
                          color: '#696969',
                        },
                      }}
                    />
                  </Box>
                  <Box sx={{ width: '100%', display: 'flex', justifyContent: 'end', mt: 1.4,  }}>
                    <Link href="https://www.instagram.com/domdo._/" color="#7AA2E3" fontSize={14} underline="none" sx={{'&:hover': {textDecoration: 'underline'}}}>
                      Forgot Password?
                    </Link>
                  </Box>
                  <Box sx={{ display: 'flex', height: 40, width: '100%', alignItems: 'center', justifyContent: 'center', mt: 1 }}>
                  <Link href="admin/dashboard" target="_self" underline="none">
                    <Button variant="contained" onClick={handleLogin} sx={{ fontFamily: "Poppins", fontSize:17, bgcolor: '#7AA2E3', width: 140, height: 50, borderRadius: 180, fontWeight: 'bold', textTransform: 'capitalize', }}>
                      Login
                    </Button>
                    </Link>
                  </Box>
                  <Typography textAlign="center" fontSize={14} pt={5} sx={{ fontFamily: "Poppins" }}>
                    Don't have account yet?{' '}
                    <Link href="https://www.instagram.com/domdo._/" underline="none" sx={{color: '#7AA2E3', '&:hover': {textDecoration: 'underline'}}}>
                      Register
                    </Link>
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Link fontSize={10} href="https://www.instagram.com/domdo._/" fontWeight={400} pt={2} underline="none" sx={{ color: 'GrayText' }}>
            Copyright@
          </Link>
        </Box>
    </>
  );
}


