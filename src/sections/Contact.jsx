import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import LetsConnect from '../assets/lets-connect.png'

export default function Contact(){
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box display="flex" justifyContent="center" alignItems="center" sx={{ py: { xs: 6, md: 5 } }}>
      <Container maxWidth="lg">
        <Box
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          justifyContent="space-around"
          alignItems="center"
        >
          {isMobile && (
            <>
              <Box display="flex" justifyContent="center" width="100%">
                <img src={LetsConnect} alt="Let's Connect" style={{ width: '100%' }} />
              </Box>

              <Stack textAlign="center" sx={{ width: { xs: '90%', md: '45%' } }}>
                <Typography variant="h4">Get in touch!</Typography>
                <Typography sx={{ mt: 1, color: 'text.secondary' }}>Ada pertanyaan atau ingin bermitra? Tinggalkan pesanmu.</Typography>
                <Stack component="form" spacing={2} sx={{ mt: 3 }} onSubmit={(e)=>{ e.preventDefault(); alert('Terima kasih! Pesanmu sudah terkirim (mock).') }}>
                  <TextField label="Nama" fullWidth required />
                  <TextField label="Email" type="email" fullWidth required />
                  <TextField label="Pesan" fullWidth required multiline minRows={4} />
                  <Button variant="contained" type="submit">Kirim</Button>
                </Stack>
              </Stack>
            </>
          )}


          {!isMobile && (
            <>
              <Stack sx={{ width: { xs: '100%', md: '45%' }, ml: { xs: 0, md: 10 } }}>
                <Typography variant="h4">Get in touch!</Typography>
                <Typography sx={{ mt: 1, color: 'text.secondary' }}>Ada pertanyaan atau ingin bermitra? Tinggalkan pesanmu.</Typography>
                <Stack component="form" spacing={2} sx={{ mt: 3 }} onSubmit={(e)=>{ e.preventDefault(); alert('Terima kasih! Pesanmu sudah terkirim (mock).') }}>
                  <TextField label="Nama" fullWidth required />
                  <TextField label="Email" type="email" fullWidth required />
                  <TextField label="Pesan" fullWidth required multiline minRows={4} />
                  <Button variant="contained" type="submit">Kirim</Button>
                </Stack>
              </Stack>

              <img src={LetsConnect} alt="Let's Connect" width="50%" />
            </>
          )}
        </Box>
      </Container>
    </Box>
  )
}