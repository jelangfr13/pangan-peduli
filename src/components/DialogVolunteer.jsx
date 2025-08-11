import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

import Volunteer from '../assets/volunteer2.jpg'

export default function DialogVolunteer ({ open, onClose, onLetsDonate }) {
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
        🤝 Bergabung Menjadi Relawan PanganPeduli
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
            src={Volunteer}
            alt="Volunteer"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </Box>
        <Typography sx={{ mt: 2, mb: 2, textAlign: 'justify' }}>
          ⠀⠀⠀Menjadi relawan berarti menjadi bagian dari keluarga besar PanganPeduli yang saling mendukung dalam misi kemanusiaan. Anda akan terlibat langsung dalam proses distribusi bantuan, penyuluhan gizi, serta berbagai kegiatan sosial di lapangan.
        </Typography>
        <Typography sx={{ mb: 2, textAlign: 'justify' }}>
          ⠀⠀⠀Kami menyediakan pelatihan dasar bagi relawan baru, termasuk keterampilan komunikasi, koordinasi tim, dan pengetahuan dasar gizi.
        </Typography>
        <Box sx={{ textAlign: 'center', fontWeight: 600, color: 'primary.main', fontSize: '1.1rem' }}>
          ❤️ Waktu dan tenaga yang Anda berikan adalah hadiah terbesar bagi mereka yang membutuhkan.
        </Box>
      </DialogContent>

      <DialogActions sx={{ justifyContent: 'center', pb: 2 }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={onLetsDonate}
          sx={{ fontWeight: 700, px: 4, color: 'primary.main' }}
        >
          Lets Join Us
        </Button>
      </DialogActions>
    </Dialog>
  )
}