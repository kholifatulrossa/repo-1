import * as React from 'react';
import { Container, Grid, Typography } from '@mui/joy';
import Sidebar from './BaseLayout/Sidebar';
import { GitHub, Twitter, Facebook } from '@mui/icons-material';

const archives = [
  { title: 'March 2024', url: '#' },
  { title: 'February 2024', url: '#' },
  { title: 'January 2024', url: '#' },
  // Tambahkan lebih banyak arsip jika diperlukan
];

const social = [
  { name: 'GitHub', icon: GitHub, url: 'https://github.com' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com' },
  { name: 'Facebook', icon: Facebook, url: 'https://facebook.com' },
];

function App() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Typography variant="h4" gutterBottom>
            Konten Utama
          </Typography>
          <Typography>
            Ini adalah contoh konten utama aplikasi Anda. Anda dapat menambahkan artikel, gambar, atau apa saja di sini.
          </Typography>
        </Grid>
        <Sidebar
          archives={archives}
          description="Ini adalah contoh sidebar yang dapat digunakan untuk menampilkan arsip dan tautan sosial."
          social={social}
          title="About"
        />
      </Grid>
    </Container>
  );
}

export default App;
