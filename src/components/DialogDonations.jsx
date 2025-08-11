import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

import Donation from '../assets/donation.jpg'

export default function DialogDonations({ open, onClose, onLetsDonate }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      sx={{
        '& .MuiDialog-paper': {
          width: '70vw',
          maxWidth: '70vw',
          height: '80vh',
          maxHeight: '80vh',
          position: 'relative',
        },
      }}
    >
      {/* Close Button */}
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 12,
          top: 12,
          zIndex: 1,
          color: (theme) => theme.palette.grey[500],
          display: { xs: 'none', sm: 'block' },
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogTitle
        sx={{
          fontWeight: 700,
          fontSize: { xs: '1.05rem', sm: '1.3rem' },
          textAlign: 'center',
          px: { xs: 2, sm: 6 },
          pt: { xs: 3, sm: 2 },
          pb: { xs: 1, sm: 2 },
          lineHeight: 1.3,
          mb: { xs: 2, md: 0 },
        }}
      >
        💚 Setiap Donasi, Harapan Baru
      </DialogTitle>

      <DialogContent>
        <Box
          sx={{
            width: '100%',
            height: { xs: 180, sm: 240, md: 260 },
            mb: 2,
            borderRadius: 1,
            overflow: 'hidden',
          }}
        >
          <img
            src={Donation}
            alt="Donations"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </Box>
        <Typography sx={{ mt: 2, mb: 2, textAlign: 'justify' }}>
          ⠀⠀⠀Setiap rupiah yang Anda donasikan akan membantu kami menyediakan makanan bergizi bagi mereka yang membutuhkan. Donasi Anda menjadi energi yang menghidupkan harapan, memberi senyum, dan memperkuat masa depan.
        </Typography>
        <Typography sx={{ mb: 2, textAlign: 'justify' }}>
          ⠀⠀⠀Kami memastikan setiap bantuan tersalurkan secara transparan, cepat, dan tepat sasaran — mulai dari keluarga pra-sejahtera, anak-anak sekolah, hingga korban bencana.
        </Typography>
        <Box sx={{ textAlign: 'center', fontWeight: 600, color: 'primary.main', fontSize: '1.1rem' }}>
          🌱 Bersama, kita bisa menciptakan perubahan yang nyata.
        </Box>
      </DialogContent>

      <DialogActions sx={{ justifyContent: 'center', pb: 2 }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={onLetsDonate}
          sx={{ fontWeight: 700, px: 4, color: 'primary.main' }}
        >
          Lets Donate!
        </Button>
      </DialogActions>
    </Dialog>
  )
}