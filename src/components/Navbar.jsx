import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'

import PanganPeduliLogo from '../assets/panganPeduli.png'

const items = [
  { label: 'Home' },
  { label: 'About' },
  { label: 'Events' },
  { label: 'Contact' },
]

export default function Navbar({ onNav }){
  const [open, setOpen] = useState(false)

  return (
    <AppBar position="fixed" color="inherit" elevation={0} sx={{ borderBottom: '1px solid #e8e8e8', background: 'rgba(255,255,255,.8)', backdropFilter: 'saturate(180%) blur(8px)' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ gap: 2, py: 1 }}>
          {/* logo */}
          <Stack display="flex" direction="row" alignItems="center" gap={1}>
            <img src={PanganPeduliLogo} alt="PanganPeduli Logo" width={24} height={24}/>
            <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 800 }}>PanganPeduli</Typography>
          </Stack>

          <Box sx={{ flexGrow: 1 }} />

          {/* nav menu desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {items.map(it => (
              <Button key={it.label} onClick={() => onNav(it.label)} sx={{ color: 'text.primary' }}>{it.label}</Button>
            ))}
          </Box>

          {/* action buttons desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            <Button variant="outlined" onClick={() => onNav('Events')}>Donate Now</Button>
            <Button variant="contained" onClick={() => onNav('Contact')}>Become a Volunteer</Button>
          </Box>

          {/* hamburger icon mobile */}
          <Box sx={{ display: { xs: 'inline-flex', md: 'none' }, ml: 1 }}>
            <IconButton onClick={() => setOpen(v => !v)}><MenuIcon /></IconButton>
          </Box>
        </Toolbar>

        {/* simple mobile sheet */}
        {open && (
          <Box sx={{ display: { md: 'none' }, pb: 2 }}>
            {items.map(it => (
              <Button key={it.label} fullWidth sx={{ justifyContent: 'center' }} onClick={() => { onNav(it.label); setOpen(false) }}>{it.label}</Button>
            ))}
            <Button fullWidth variant="outlined" sx={{ mt: 1 }} onClick={() => onNav('Events')}>Donate Now</Button>
            <Button fullWidth variant="contained" sx={{ mt: 1 }} onClick={() => onNav('Contact')}>Become a Volunteer</Button>
          </Box>
        )}
      </Container>
    </AppBar>
  )
}