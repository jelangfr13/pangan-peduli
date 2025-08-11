import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import LinearProgress from '@mui/material/LinearProgress';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import Papua from '../assets/Papua.jpg'; 
import Papua2 from '../assets/papua2.jpg';
import Rel from '../assets/rel.jpg';
import AnakYatim from '../assets/anakYatim.jpg';
import Banjir from '../assets/banjir.jpg';
import Semeru from '../assets/semeru.jpg';

const campaigns = [
  { title: 'Kepada Saudara Kita di Papua', img: Papua, raised: 82000000, goal: 120000000, days: 17, tag: 'Emergency' },
  { title: 'Pangan darurat untuk Papua', img: Papua2, raised: 64000000, goal: 90000000, days: 8, tag: 'Food & Nutrition' },
  { title: 'Hidup Lebih Layak untuk Mereka', img: Rel, raised: 88125000, goal: 99000000, days: 10, tag: 'Community' },
  { title: 'Bagi Mereka yang Terlupakan', img: AnakYatim, raised: 36000000, goal: 60000000, days: 24, tag: 'Future Generations' },
  { title: 'Banjir di Surakarta', img: Banjir, raised: 45000000, goal: 50000000, days: 2, tag: 'Emergency' },
  { title: 'Kemanusiaan untuk Semeru', img: Semeru, raised: 50000000, goal: 70000000, days: 15, tag: 'Emergency' },
]

function money(n){ return new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR', maximumFractionDigits:0}).format(n) }

export default function Events(){
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ py: { xs: 4, md: 5 } }}>
      <Container maxWidth="lg">
        <Stack direction="column" justifyContent="center" alignItems="center" sx={{ mb: { xs: 5, md: 5 } }}>
          <Typography variant="h5" sx={{ fontSize: { xs: '1.5rem', md: '2.125rem' }, fontWeight: 500, color: 'var(--pp-green)' }}>
            Donations you can support
          </Typography>
          <Box sx={{ border: '2px solid var(--pp-green)', flexGrow: 1, mx: 5, mt: 2, width: '100%' }} />
        </Stack>

        <Grid container spacing={3} justifyContent="center">
          {campaigns.map((c,i)=>{
            const pct = Math.min(100, Math.round((c.raised/c.goal)*100))
            return (
              <Grid item xs={12} md={6} key={i} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Card className="shadow-soft" sx={{ width: 350 }}>
                  {/* thumbnail */}
                  <Box sx={{ height: 220, overflow: 'hidden' }}>
                    <img src={c.img} alt={c.title} style={{ width:'100%', height:'100%', objectFit:'cover' }} />
                  </Box>

                  <CardContent>
                    {/* tag */}
                    <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
                      <Chip size="small" label={c.tag} />
                    </Stack>

                    {/* title and progress */}
                    <Typography variant="h6">{c.title}</Typography>
                    <Stack spacing={1} sx={{ mt: 1 }}>
                      <LinearProgress variant="determinate" value={pct} sx={{ height: 8, borderRadius: 99 }} />
                      <Stack direction="row" justifyContent="space-between">
                        <Typography variant="body2" color="text.secondary">{money(c.raised)} raised</Typography>
                        <Typography variant="body2" color="text.secondary">Goal {money(c.goal)}</Typography>
                      </Stack>
                      <Typography variant="caption" color="text.secondary">{pct}% • {c.days} days left</Typography>
                    </Stack>
                  </CardContent>

                  <CardActions sx={{ px: 2, pb: 2 }}>
                    <Button variant="contained">Donate Now</Button>
                    <Button>Details</Button>
                  </CardActions>
                </Card>
              </Grid>
            )
          })}
        </Grid>

        {/* CTA band */}
        <Box
          sx={{
            mt: { xs: 6, md: 10 },
            mx: { xs: 2, md: 5 },
            p: { xs: 4, md: 5 },
            background: 'var(--pp-green)',
            color: '#fff',
            borderRadius: 1,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'stretch', md: 'center' },
            gap: { xs: 3, md: 0 },
          }}
        >
          <Box width={{ xs: '100%', md: '70%' }}>
            <Typography variant="h5" fontFamily="sans-serif">
              Become a volunteer!
            </Typography>
            <Typography fontFamily="monospace" sx={{ opacity: 0.9, mt: 0.5 }}>
              Bergandengan tangan mewujudkan masa depan yang lebih baik dan indah.
            </Typography>
          </Box>

          <Stack
            sx={{ width: { xs: '100%', md: '20%' } }}
          >
            <Button
              variant="outlined"
              color="inherit"
              href="#contact"
              onClick={handleScrollToContact}
              fullWidth
            >
              Hubungi Kami
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}