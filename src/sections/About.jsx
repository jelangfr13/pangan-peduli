import { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Picture1 from '../assets/picture1.jpg';
import Picture2 from '../assets/picture2.jpg';
import Picture3 from '../assets/picture3.jpg';
import Video1 from '../assets/video1.mp4';

function Counter({ end = 100, duration = 1800 }) {
  const [ value, setValue ] = useState(0);
  const rafRef = useRef();
  const startRef = useRef(0);

  useEffect(() => {
    function step(ts) {
      if (!startRef.current) startRef.current = ts;

      const progress = Math.min((ts - startRef.current) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * end));

      if (progress < 1) rafRef.current = requestAnimationFrame(step);
    }
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [ end, duration ]);

  return <>{ value }</>;
}

export default function About(){
  const stats = [
    { end: 100, suffix: 'K', label: 'Paket makanan' },
    { end: 100, suffix: '+', label: 'Komunitas' },
    { end: 5000, suffix: '+', label: 'Relawan' },
    { end: 150, suffix: '+', label: 'Kota & kabupaten' },
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      {/* Header + deskripsi */}
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        sx={{ mb: 4, width: '100%' }}
      >
        <Typography
          variant='h4'
          fontWeight={600}
          fontFamily="'Fredoka', sans-serif"
          align="center"
        >
          Changing Lives with Knowledge!
        </Typography>
        <Typography
          variant='body1'
          align="center"
          mt={2}
          px={{ xs: 2, md: 0 }}
        >
          Kami berkomitmen menyalurkan makanan sehat, meningkatkan kesadaran, dan menghubungkan donatur-relawan-penerima bantuan secara transparan!
        </Typography>

        {/* Gallery */}
        <Grid
          container
          spacing={3}
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            width: '100%',
            mt: { xs: 4, md: 0 },
            px: { xs: 0, md: 4 },
          }}
        >
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', md: 'flex-end' },
              alignItems: 'center',
              px: { xs: 3, md: 0 }
            }}
          >
            <Box component="img" src={Picture1} alt="collecting-donation"
              sx={{
                width: { xs: '100%', md: '100%' },
                maxWidth: 320,
                borderRadius: 1,
                transition: 'transform .3s cubic-bezier(.4,2,.6,1)',
                boxShadow: 3,
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.05)',
                  zIndex: 2
                },
              }}/>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mt: { xs: 0, md: 8 },
              px: { xs: 3, md: 0 }
            }}>
            <Box component="img" src={Picture2} alt="food-distribution"
              sx={{
                width: { xs: '100%', md: '100%' },
                maxWidth: 320,
                borderRadius: 1,
                transition: 'transform .3s cubic-bezier(.4,2,.6,1)',
                boxShadow: 3,
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.05)',
                  zIndex: 2
                },
              }}/>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', md: 'flex-start' },
              alignItems: 'center',
              mt: { xs: 0, md: 16 },
              px: { xs: 3, md: 0 }
            }}>
            <Box component="img" src={Picture3} alt="community-support"
              sx={{
                width: { xs: '100%', md: '100%' },
                maxWidth: 320,
                borderRadius: 1,
                transition: 'transform .3s cubic-bezier(.4,2,.6,1)',
                boxShadow: 3,
                cursor: 'pointer',
                '&:hover': { transform: 'scale(1.05)', zIndex: 2 },
              }}/>
          </Grid>
        </Grid>

        {/* <Button
          variant="outlined"
          sx={{ mt: { xs: 4, md: 5 } }}
          size='large'
          onClick={() => {
            const el = document.getElementById('events');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Pelajari Program
        </Button> */}
      </Box>

      {/* === VIDEO IMPACT MENGGANTIKAN KOTAK STATISTIK === */}
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: { xs: 10, md: 14 },
          px: { xs: 3, md: 10 },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            maxWidth: 1180,
            height: { xs: 400, sm: 460, md: 540 },
            borderRadius: 3,
            overflow: 'hidden',
            boxShadow: '0 24px 60px rgba(0,0,0,.15)',
          }}
        >
          {/* Video dengan filter vintage hitam */}
          <Box
            component="video"
            src={Video1}
            autoPlay
            muted
            loop
            playsInline
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'grayscale(100%) contrast(1.1) brightness(0.9)',
            }}
          />

          {/* Vignette */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(120% 80% at 50% 50%, rgba(0,0,0,0) 40%, rgba(0,0,0,.45) 100%)',
              pointerEvents: 'none',
            }}
          />

          {/* Title overlay di tengah video */}
          <Box
            sx={{
              position: 'absolute',
              top: { xs: '28%', md: '32%' },
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: '#fff',
              textAlign: 'center',
              textShadow: '0 3px 12px rgba(0,0,0,.6)',
              px: 2,
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Fredoka', sans-serif",
                fontWeight: 900,
                fontSize: { xs: '1.6rem', sm: '2.1rem', md: '2.8rem' },
                lineHeight: 1.15,
                letterSpacing: 0.2,
              }}
            >
              Our Impact in Motion
            </Typography>
            <Typography
              sx={{
                opacity: 0.95,
                fontWeight: 700,
                fontSize: { xs: '.95rem', md: '1.15rem' },
                mt: .75,
                display: { xs: 'none', md: 'block' },
              }}
            >
              Feeding Lives • Spreading Smiles • Building Futures
            </Typography>
          </Box>

          {/* Stats overlay di tengah (wrap di mobile) */}
          <Box
            sx={{
              position: 'absolute',
              top: { xs: '62%', sm: '58%', md: '60%' },
              left: '50%',
              transform: 'translate(-50%, -50%)',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              columnGap: { xs: 1.25, md: 2.5 },
              rowGap: { xs: 1.25, md: 2 },
              width: { xs: '88%', sm: '100%' },
              textAlign: 'center',
            }}
          >
            {stats.map((s, i) => (
              <Box
                key={i}
                sx={{
                  backdropFilter: 'blur(6px)',
                  background: 'rgba(0,0,0,.35)',
                  border: '1px solid rgba(255,255,255,.25)',
                  borderRadius: 999,
                  px: { xs: 1.25, md: 2 },
                  py: { xs: .75, md: 1 },
                  minWidth: { xs: 120, sm: 140 },
                  color: '#fff',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Fredoka', sans-serif",
                    fontWeight: 900,
                    fontSize: { xs: '1.25rem', md: '2rem' },
                    lineHeight: 1,
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'center',
                    gap: .25,
                    textShadow: '0 2px 8px rgba(0,0,0,.55)',
                  }}
                >
                  <Counter end={s.end} />
                  <Box component="span" sx={{ fontWeight: 900, fontSize: { xs: '1rem', md: '1.3rem' }, ml: .25 }}>
                    {s.suffix}
                  </Box>
                </Typography>
                <Typography sx={{ opacity: .95, fontWeight: 600, fontSize: { xs: '.8rem', md: '.95rem' } }}>
                  {s.label}
                </Typography>
              </Box>
            ))}
          </Box>

        </Box>
      </Container>
    </Box>
  );
}
