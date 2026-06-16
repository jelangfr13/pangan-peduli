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
import QrCode2RoundedIcon from '@mui/icons-material/QrCode2Rounded'

import QrSaweria from '../assets/qr-saweria.png'

export default function DialogDonate({ open, onClose }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      sx={{
        '& .MuiDialog-paper': {
          borderRadius: '12px',
          overflow: 'hidden',
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
          sx={{ px: { xs: 2, sm: 3 }, py: 2 }}
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
              <QrCode2RoundedIcon fontSize="small" />
            </Box>
            <Box sx={{ minWidth: 0 }}>
              <Typography
                component="h2"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '1rem', sm: '1.25rem' },
                  lineHeight: 1.2,
                  color: 'text.primary',
                }}
              >
                Terima kasih atas donasinya
              </Typography>
              <Typography
                sx={{
                  mt: 0.35,
                  color: 'text.secondary',
                  fontSize: { xs: '0.78rem', sm: '0.9rem' },
                  lineHeight: 1.4,
                }}
              >
                Scan QR berikut untuk berdonasi.
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
          py: { xs: 2.5, sm: 3 },
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            mx: 'auto',
            width: { xs: 'min(100%, 260px)', sm: 290 },
            p: 1.5,
            borderRadius: '10px',
            border: '1px solid rgba(27, 94, 32, 0.14)',
            bgcolor: '#fff',
          }}
        >
          <Box
            component="img"
            src={QrSaweria}
            alt="QR Saweria untuk donasi"
            sx={{
              width: '100%',
              aspectRatio: '1 / 1',
              display: 'block',
              objectFit: 'contain',
            }}
          />
        </Box>

        <Typography
          sx={{
            mt: 2.5,
            p: { xs: 1.75, sm: 2 },
            borderRadius: '8px',
            bgcolor: 'rgba(255, 209, 102, 0.28)',
            color: 'text.primary',
            border: '1px solid rgba(255, 209, 102, 0.75)',
            fontWeight: 800,
            fontSize: { xs: '0.82rem', sm: '0.88rem' },
            lineHeight: 1.55,
          }}
        >
          DANA YANG ANDA BERIKAN MELALUI QR DI ATAS AKAN MASUK KE REKENING PRIBADI DEVELOPER DAN TETAP DIANGGAP SEBAGAI BENTUK DONASI!
        </Typography>

        <Typography sx={{ mt: 2, color: 'text.secondary', lineHeight: 1.6 }}>
          Setiap kontribusi Anda sangat berarti bagi kami.
        </Typography>
      </DialogContent>

      <DialogActions
        sx={{
          justifyContent: 'center',
          px: { xs: 2, sm: 3 },
          py: 2,
          borderTop: '1px solid rgba(27, 94, 32, 0.1)',
        }}
      >
        <Button
          onClick={onClose}
          variant="contained"
          color="secondary"
          sx={{
            width: { xs: '100%', sm: 'auto' },
            minWidth: { sm: 150 },
            color: 'primary.main',
            fontWeight: 800,
            borderRadius: '10px',
          }}
        >
          Tutup
        </Button>
      </DialogActions>
    </Dialog>
  )
}
