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

  const featureCardSx = {
    width: '100%',
    maxWidth: { xs: 360, sm: 400, md: '100%' },
    height: '100%',
    mx: { xs: 3, md: 0 },
    borderRadius: '12px',
    display: 'flex',
  }

  const featureContentSx = {
    width: '100%',
    minHeight: { xs: 230, sm: 250 },
    px: { xs: 3, sm: 4 },
    py: { xs: 4, sm: 5 },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    '&:last-child': { pb: { xs: 4, sm: 5 } },
    '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.04)' },
    cursor: 'default',
  }

  const featureIconSx = {
    width: 44,
    height: 44,
    display: 'grid',
    placeItems: 'center',
    color: 'primary.main',
    '& svg': { fontSize: 34 },
  }

  const featureTitleSx = {
    mt: 2,
    fontWeight: 700,
    lineHeight: 1.2,
    minHeight: { xs: 34, sm: 38 },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  const featureDescriptionSx = {
    color: 'text.secondary',
    mt: 1.5,
    lineHeight: 1.45,
    minHeight: 58,
    maxWidth: 320,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  const featureButtonSx = {
    mt: 'auto',
    minWidth: 124,
    fontWeight: 700,
  }

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
            <Box flex={1} display="flex" justifyContent="center" alignItems="stretch">
              <Card
                className="shadow-soft"
                sx={featureCardSx}
              >
                <CardContent sx={featureContentSx}>
                  <Box sx={featureIconSx}>
                    <LocalDiningIcon />
                  </Box>
                  <Typography variant="h5" sx={featureTitleSx}>
                    Send us donations
                  </Typography>
                  <Typography sx={featureDescriptionSx}>
                    Setiap donasi adalah energi untuk kehidupan.
                  </Typography>
                  <Button sx={featureButtonSx} onClick={handleDonationsLearnMore}>Learn More</Button>
                </CardContent>
              </Card>
            </Box>
            <Box flex={1} display="flex" justifyContent="center" alignItems="stretch">
              <Card
                className="shadow-soft"
                sx={featureCardSx}
              >
                <CardContent sx={featureContentSx}>
                  <Box sx={featureIconSx}>
                    <VolunteerActivismIcon />
                  </Box>
                  <Typography variant="h5" sx={featureTitleSx}>
                    Get inspired & help
                  </Typography>
                  <Typography sx={featureDescriptionSx}>
                    Aksi kecilmu berdampak besar bagi mereka.
                  </Typography>
                  <Button sx={featureButtonSx} onClick={handleInspiredLearnMore}>Learn More</Button>
                </CardContent>
              </Card>
            </Box>
            <Box flex={1} display="flex" justifyContent="center" alignItems="stretch">
              <Card
                className="shadow-soft"
                sx={featureCardSx}
              >
                <CardContent sx={featureContentSx}>
                  <Box sx={featureIconSx}>
                    <Diversity1Icon />
                  </Box>
                  <Typography variant="h5" sx={featureTitleSx}>
                    Become a volunteer
                  </Typography>
                  <Typography sx={featureDescriptionSx}>
                    Bergabung dan bantu kami di lapangan.
                  </Typography>
                  <Button sx={featureButtonSx} onClick={handleVolunteerLearnMore}>Learn More</Button>
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
