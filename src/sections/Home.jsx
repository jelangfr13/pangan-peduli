import { useState } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism'
import LocalDiningIcon from '@mui/icons-material/LocalDining'
import Diversity1Icon from '@mui/icons-material/Diversity1'

import DialogDonations from '../components/DialogDonations'
import DialogInspiredHelp from '../components/DialogInspiredHelp'
import DialogVolunteer from '../components/DialogVolunteer'

import volunteer from '../assets/volunteer.png'

export default function Home({ onDonate }) {
  const [ openDialogDonations, setOpenDialogDonations ] = useState(false)
  const [ openDialogInspiredHelp, setOpenDialogInspiredHelp ] = useState(false)
  const [ openDialogVolunteer, setOpenDialogVolunteer ] = useState(false)

  const handleDonationsLearnMore = () => setOpenDialogDonations(true)
  const handleCloseDialogDonations = () => setOpenDialogDonations(false)
  const handleLetsDonate = () => {
    setOpenDialogDonations(false)
    if (onDonate) onDonate()
  }

  const handleInspiredLearnMore = () => setOpenDialogInspiredHelp(true)
  const handleCloseDialogInspiredHelp = () => setOpenDialogInspiredHelp(false)
  const handleInspiredLetsDonate = () => {
    setOpenDialogInspiredHelp(false)
    if (onDonate) onDonate()
  }

  const handleVolunteerLearnMore = () => setOpenDialogVolunteer(true)
  const handleCloseDialogVolunteer = () => setOpenDialogVolunteer(false)
  const handleVolunteerLetsDonate = () => {
    setOpenDialogVolunteer(false)
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <Box
        sx={{
          backgroundColor: 'primary.main',
          color: '#fff',
          display: { xs: 'block', md: 'flex' },
          px: { xs: 2, sm: 4, md: 10 },
          pt: { xs: 6, md: 10 },
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          width={{ xs: '100%', md: '50%' }}
          ml={{ xs: 0, md: 10 }}
          mb={{ xs: 4, md: 10 }}
          alignItems={{ xs: 'center', md: 'flex-start' }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 500,
              lineHeight: 1.3,
              fontFamily: "'Fredoka', sans-serif",
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.75rem' },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Feeding Lives <br /> Spreading Smiles <br />
            <span style={{ color: '#ffd166' }}>Building Futures!</span>
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mt: 3,
              opacity: 0.9,
              fontFamily: 'monospace',
              fontSize: { xs: '1rem', md: '1.25rem' },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Bersama, kita tak hanya mengenyangkan perut, tetapi juga menguatkan hati dan masa depan!
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{
              color: 'primary.main',
              fontWeight: 700,
              mt: 3,
              width: { xs: '100%', sm: 250, md: 300 },
              maxWidth: 300,
            }}
            onClick={onDonate}
          >
            Donate Now
          </Button>
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width={{ xs: '100%', md: '50%' }}
          height={{ xs: 220, sm: 300, md: 500 }}
          mt={{ xs: 2, md: 0 }}
        >
          <img
            src={volunteer}
            alt="volunteer image"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              height: '100%',
              width: 'auto',
              display: 'block',
            }}
          />
        </Box>
      </Box>

      <Box>
        <Container maxWidth="lg" sx={{ px: { xs: 0, sm: 2 } }}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 2, md: 3 }}
            alignItems="stretch"
            justifyContent="center"
            sx={{ mt: { xs: 5, md: 8 } }}
          >
            <Box flex={1} display="flex" justifyContent="center">
              <Card
                className="shadow-soft"
                sx={{
                  width: { xs: '100%', sm: 400, md: 1 },
                  maxWidth: 400,
                  mx: { xs: 3, md: 'auto' },
                }}
              >
                <CardContent
                  sx={{
                    padding: 3,
                    '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.05)' },
                    cursor: 'default',
                    textAlign: 'center',
                  }}
                >
                  <Box sx={{ fontSize: 34, color: 'primary.main' }}>
                    <LocalDiningIcon />
                  </Box>
                  <Typography variant="h5" sx={{ mt: 1, fontWeight: 600 }}>
                    Send us donations
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', mt: 0.5 }}>
                    Setiap donasi adalah energi untuk kehidupan.
                  </Typography>
                  <Button sx={{ mt: 1.5 }} onClick={handleDonationsLearnMore}>Learn More</Button>
                </CardContent>
              </Card>
            </Box>
            <Box flex={1} display="flex" justifyContent="center">
              <Card
                className="shadow-soft"
                sx={{
                  width: { xs: '100%', sm: 400, md: 1 },
                  maxWidth: 400,
                  mx: { xs: 3, md: 'auto' },
                }}
              >
                <CardContent
                  sx={{
                    padding: 3,
                    '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.05)' },
                    cursor: 'default',
                    textAlign: 'center',
                  }}
                >
                  <Box sx={{ fontSize: 34, color: 'primary.main' }}>
                    <VolunteerActivismIcon />
                  </Box>
                  <Typography variant="h5" sx={{ mt: 1, fontWeight: 600 }}>
                    Get inspired & help
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', mt: 0.5 }}>
                    Aksi kecilmu berdampak besar bagi mereka.
                  </Typography>
                  <Button sx={{ mt: 1.5 }} onClick={handleInspiredLearnMore}>Learn More</Button>
                </CardContent>
              </Card>
            </Box>
            <Box flex={1} display="flex" justifyContent="center">
              <Card
                className="shadow-soft"
                sx={{
                  width: { xs: '100%', sm: 400, md: 1 },
                  maxWidth: 400,
                  mx: { xs: 3, md: 'auto' },
                }}
              >
                <CardContent
                  sx={{
                    padding: 3,
                    '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.05)' },
                    cursor: 'default',
                    textAlign: 'center',
                  }}
                >
                  <Box sx={{ fontSize: 34, color: 'primary.main' }}>
                    <Diversity1Icon />
                  </Box>
                  <Typography variant="h5" sx={{ mt: 1, fontWeight: 600 }}>
                    Become a volunteer
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', mt: 0.5 }}>
                    Bergabung dan bantu kami di lapangan.
                  </Typography>
                  <Button sx={{ mt: 1.5 }} onClick={handleVolunteerLearnMore}>Learn More</Button>
                </CardContent>
              </Card>
            </Box>
          </Stack>
        </Container>
      </Box>
      <DialogDonations
        open={openDialogDonations}
        onClose={handleCloseDialogDonations}
        onLetsDonate={handleLetsDonate}
      />
      <DialogInspiredHelp
        open={openDialogInspiredHelp}
        onClose={handleCloseDialogInspiredHelp}
        onLetsDonate={handleInspiredLetsDonate}
      />
      <DialogVolunteer
        open={openDialogVolunteer}
        onClose={handleCloseDialogVolunteer}
        onLetsDonate={handleVolunteerLetsDonate}
      />
    </>
  )
}