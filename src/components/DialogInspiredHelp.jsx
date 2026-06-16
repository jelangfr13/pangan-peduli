import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import CloseIcon from '@mui/icons-material/Close'
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded'

import InspiredHelp from '../assets/inspired-help.jpg'

export default function DialogInspiredHelp ({ open, onClose, onLetsDonate }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      sx={{
        '& .MuiDialog-paper': {
          width: { xs: 'calc(100% - 24px)', sm: 'min(92vw, 920px)' },
          maxWidth: '920px',
          maxHeight: { xs: 'calc(100vh - 32px)', sm: 'calc(100vh - 64px)' },
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '12px',
          boxShadow: '0 24px 70px rgba(16, 32, 24, 0.28)',
        },
      }}
    >
      <DialogTitle
        component="div"
        sx={{
          p: 0,
          borderBottom: '1px solid rgba(27, 94, 32, 0.1)',
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
          sx={{ px: { xs: 2, sm: 3 }, py: { xs: 1.5, sm: 2 } }}
        >
          <Stack direction="row" spacing={1.25} alignItems="center" sx={{ minWidth: 0 }}>
            <Box
              sx={{
                width: 38,
                height: 38,
                flex: '0 0 auto',
                borderRadius: '8px',
                display: 'grid',
                placeItems: 'center',
                bgcolor: 'rgba(27, 94, 32, 0.1)',
                color: 'primary.main',
              }}
            >
              <AutoAwesomeRoundedIcon fontSize="small" />
            </Box>
            <Box sx={{ minWidth: 0 }}>
              <Typography
                component="h2"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '1rem', sm: '1.35rem' },
                  lineHeight: 1.2,
                  color: 'text.primary',
                }}
              >
                Inspirasi yang Menggerakkan Tindakan
              </Typography>
              <Typography
                sx={{
                  mt: 0.35,
                  color: 'text.secondary',
                  fontSize: { xs: '0.78rem', sm: '0.9rem' },
                  lineHeight: 1.4,
                }}
              >
                Aksi sederhana yang menular jadi kebaikan.
              </Typography>
            </Box>
          </Stack>

          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              flex: '0 0 auto',
              color: 'text.secondary',
              bgcolor: 'rgba(16, 32, 24, 0.05)',
              borderRadius: '8px',
              '&:hover': {
                bgcolor: 'rgba(16, 32, 24, 0.1)',
              },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Stack>
      </DialogTitle>

      <DialogContent
        sx={{
          px: { xs: 2, sm: 3 },
          py: { xs: 2, sm: 3 },
        }}
      >
        <Box
          sx={{
            width: '100%',
            aspectRatio: { xs: '4 / 3', sm: '16 / 7' },
            mb: { xs: 2, sm: 2.5 },
            borderRadius: '8px',
            overflow: 'hidden',
            bgcolor: 'rgba(27, 94, 32, 0.08)',
          }}
        >
          <Box
            component="img"
            src={InspiredHelp}
            alt="Relawan berbagi bantuan dan menginspirasi aksi sosial"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
            }}
          />
        </Box>

        <Stack spacing={2.25}>
          <Typography sx={{ color: 'text.primary', lineHeight: 1.8, fontSize: { xs: '0.95rem', sm: '1rem' } }}>
            PanganPeduli percaya bahwa aksi kecil Anda dapat berdampak besar. Bergabunglah bersama kami untuk menyebarkan inspirasi dan membantu sesama melalui berbagai program berbagi pangan, edukasi gizi, dan pemberdayaan masyarakat.
          </Typography>
          <Typography sx={{ color: 'text.primary', lineHeight: 1.8, fontSize: { xs: '0.95rem', sm: '1rem' } }}>
            Anda bisa ikut menjadi bagian dari kisah inspiratif, dari mempersiapkan paket makanan, mengantarkan bantuan, hingga mengedukasi masyarakat tentang pola makan sehat.
          </Typography>
        </Stack>

        <Box
          sx={{
            mt: { xs: 2.5, sm: 3 },
            p: { xs: 1.75, sm: 2 },
            borderRadius: '8px',
            textAlign: 'center',
            fontWeight: 800,
            color: 'primary.main',
            fontSize: { xs: '0.98rem', sm: '1.08rem' },
            lineHeight: 1.5,
            bgcolor: 'rgba(27, 94, 32, 0.08)',
          }}
        >
          Satu langkah Anda hari ini, ribuan senyum esok hari.
        </Box>
      </DialogContent>

      <DialogActions
        sx={{
          justifyContent: 'center',
          px: { xs: 2, sm: 3 },
          py: { xs: 2, sm: 2.5 },
          borderTop: '1px solid rgba(27, 94, 32, 0.1)',
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          onClick={onLetsDonate}
          size="large"
          sx={{
            width: { xs: '100%', sm: 'auto' },
            minWidth: { sm: 190 },
            fontWeight: 800,
            px: 4,
            color: 'primary.main',
            borderRadius: '10px',
            boxShadow: '0 8px 18px rgba(255, 209, 102, 0.35)',
            '&:hover': {
              boxShadow: '0 10px 22px rgba(255, 209, 102, 0.45)',
            },
          }}
        >
          Donasi Sekarang
        </Button>
      </DialogActions>
    </Dialog>
  )
}
