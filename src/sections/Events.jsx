import { useState } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import LinearProgress from '@mui/material/LinearProgress';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';

import DialogDonate from '../components/DialogDonate';

import Papua from '../assets/Papua.jpg'; 
import Papua2 from '../assets/papua2.jpg';
import Rel from '../assets/rel.jpg';
import AnakYatim from '../assets/anakYatim.jpg';
import Banjir from '../assets/banjir.jpg';
import Semeru from '../assets/semeru.jpg';

const campaigns = [
  {
    title: 'Kepada Saudara Kita di Papua',
    img: Papua,
    raised: 82000000,
    goal: 120000000,
    days: 17,
    tag: 'Emergency',
    location: 'Papua',
    beneficiaries: '1.200 keluarga',
    description: 'Bantuan pangan dan kebutuhan pokok untuk saudara kita di Papua yang sedang menghadapi keterbatasan akses logistik.',
    funds: ['Paket beras, minyak, dan bahan pangan pokok', 'Distribusi ke titik komunitas terpencil', 'Koordinasi relawan dan transportasi lokal'],
    impact: ['Memenuhi kebutuhan makan harian keluarga', 'Mengurangi risiko kelaparan di wilayah prioritas', 'Menjaga distribusi bantuan tetap tepat sasaran'],
  },
  {
    title: 'Pangan darurat untuk Papua',
    img: Papua2,
    raised: 64000000,
    goal: 90000000,
    days: 8,
    tag: 'Food & Nutrition',
    location: 'Papua',
    beneficiaries: '850 penerima manfaat',
    description: 'Program pangan darurat untuk memastikan anak-anak, lansia, dan keluarga rentan tetap mendapatkan asupan bergizi.',
    funds: ['Makanan siap santap dan bahan pangan bergizi', 'Air minum dan kebutuhan dapur darurat', 'Pengemasan paket bantuan harian'],
    impact: ['Membantu pemenuhan gizi dasar', 'Mempercepat respons bantuan di lapangan', 'Mendukung keluarga rentan selama masa darurat'],
  },
  {
    title: 'Hidup Lebih Layak untuk Mereka',
    img: Rel,
    raised: 88125000,
    goal: 99000000,
    days: 10,
    tag: 'Community',
    location: 'Komunitas pra-sejahtera',
    beneficiaries: '600 keluarga',
    description: 'Dukungan berkelanjutan untuk keluarga pra-sejahtera agar memiliki akses pangan, perlengkapan harian, dan pendampingan dasar.',
    funds: ['Sembako keluarga bulanan', 'Perlengkapan kebersihan dan kebutuhan rumah', 'Pendataan serta monitoring penerima bantuan'],
    impact: ['Meringankan beban kebutuhan rumah tangga', 'Meningkatkan ketahanan pangan keluarga', 'Membantu komunitas bangkit secara bertahap'],
  },
  {
    title: 'Bagi Mereka yang Terlupakan',
    img: AnakYatim,
    raised: 36000000,
    goal: 60000000,
    days: 24,
    tag: 'Future Generations',
    location: 'Panti dan komunitas anak',
    beneficiaries: '420 anak',
    description: 'Bantuan pangan dan dukungan kebutuhan dasar untuk anak-anak yatim serta anak dari keluarga kurang mampu.',
    funds: ['Paket makanan bergizi untuk anak', 'Susu, vitamin, dan kebutuhan sekolah dasar', 'Kegiatan berbagi dan pendampingan komunitas'],
    impact: ['Mendukung tumbuh kembang anak', 'Memberikan rasa aman dan diperhatikan', 'Membantu kebutuhan belajar harian'],
  },
  {
    title: 'Banjir di Surakarta',
    img: Banjir,
    raised: 45000000,
    goal: 50000000,
    days: 2,
    tag: 'Emergency',
    location: 'Surakarta',
    beneficiaries: '500 warga terdampak',
    description: 'Bantuan cepat untuk warga terdampak banjir di Surakarta berupa makanan, air bersih, dan kebutuhan darurat.',
    funds: ['Makanan siap santap untuk posko pengungsian', 'Air mineral, selimut, dan perlengkapan darurat', 'Transportasi distribusi ke area terdampak'],
    impact: ['Membantu kebutuhan mendesak pengungsi', 'Menjaga pasokan pangan di posko', 'Mempercepat pemulihan awal warga'],
  },
  {
    title: 'Kemanusiaan untuk Semeru',
    img: Semeru,
    raised: 50000000,
    goal: 70000000,
    days: 15,
    tag: 'Emergency',
    location: 'Area terdampak Semeru',
    beneficiaries: '700 penyintas',
    description: 'Dukungan kemanusiaan bagi penyintas bencana Semeru melalui bantuan pangan, kebutuhan harian, dan distribusi relawan.',
    funds: ['Paket makanan dan kebutuhan dapur umum', 'Masker, obat ringan, dan perlengkapan kebersihan', 'Dukungan operasional relawan lapangan'],
    impact: ['Menopang kebutuhan pangan penyintas', 'Membantu proses pemulihan pascabencana', 'Memperkuat kerja relawan di lokasi'],
  },
]

function money(n){ return new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR', maximumFractionDigits:0}).format(n) }

export default function Events(){
  const [ dialogDonateOpen, setDialogDonateOpen ] = useState(false);
  const [ selectedCampaign, setSelectedCampaign ] = useState(null);

  const handleDonateOpen = () => setDialogDonateOpen(true);
  const handleDonateClose = () => setDialogDonateOpen(false);
  const handleDetailsOpen = (campaign) => {
    setSelectedCampaign(campaign);
    requestAnimationFrame(() => {
      document.getElementById('events')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };
  const handleDetailsClose = () => setSelectedCampaign(null);

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
        {selectedCampaign ? (
          <DonationDetail
            campaign={selectedCampaign}
            onBack={handleDetailsClose}
            onDonate={handleDonateOpen}
          />
        ) : (
          <>
            <Stack direction="column" justifyContent="center" alignItems="center" sx={{ mb: { xs: 5, md: 5 } }}>
              <Typography variant="h5" sx={{ fontSize: { xs: '1.5rem', md: '2.125rem' }, fontWeight: 500, color: 'var(--pp-green)' }}>
                Donations you can support
              </Typography>
              <Box sx={{ border: '2px solid var(--pp-green)', flexGrow: 1, mx: 5, mt: 2, width: '100%' }} />
            </Stack>

            <Box
              sx={{
                maxWidth: 1056,
                mx: 'auto',
                display: 'grid',
                gridTemplateColumns: {
                  xs: 'minmax(0, 1fr)',
                  sm: 'repeat(2, minmax(0, 1fr))',
                  md: 'repeat(3, minmax(0, 1fr))',
                },
                gap: { xs: 2.5, md: 3 },
                alignItems: 'stretch',
              }}
            >
              {campaigns.map((c,i)=>{
                const pct = Math.min(100, Math.round((c.raised/c.goal)*100))
                return (
                    <Card
                      key={i}
                      className="shadow-soft"
                      sx={{
                        width: '100%',
                        minHeight: 428,
                        borderRadius: '12px',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        border: '1px solid rgba(27, 94, 32, 0.08)',
                        transition: 'transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease',
                        '&:hover': {
                          transform: 'translateY(-6px)',
                          boxShadow: '0 18px 42px rgba(16, 32, 24, 0.16)',
                          borderColor: 'rgba(27, 94, 32, 0.28)',
                        },
                        '&:hover .campaign-card-image': {
                          transform: 'scale(1.05)',
                        },
                        '&:hover .campaign-card-overlay': {
                          opacity: 1,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          position: 'relative',
                          height: 210,
                          flex: '0 0 210px',
                          overflow: 'hidden',
                          bgcolor: 'rgba(27, 94, 32, 0.08)',
                        }}
                      >
                        <Box
                          component="img"
                          className="campaign-card-image"
                          src={c.img}
                          alt={c.title}
                          sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                            transition: 'transform 260ms ease',
                          }}
                        />
                        <Box
                          className="campaign-card-overlay"
                          sx={{
                            position: 'absolute',
                            inset: 0,
                            opacity: 0,
                            transition: 'opacity 180ms ease',
                            background: 'linear-gradient(180deg, rgba(16, 32, 24, 0) 45%, rgba(16, 32, 24, 0.34) 100%)',
                            pointerEvents: 'none',
                          }}
                        />
                      </Box>

                      <CardContent
                        sx={{
                          flex: '1 1 auto',
                          display: 'flex',
                          flexDirection: 'column',
                          px: 2,
                          pt: 1.5,
                          pb: 0,
                          minHeight: 154,
                        }}
                      >
                        {/* tag */}
                        <Stack direction="row" spacing={1} sx={{ mb: 1, minHeight: 24, alignItems: 'center' }}>
                          <Chip
                            size="small"
                            label={c.tag}
                            sx={{
                              height: 24,
                              borderRadius: '8px',
                              fontSize: '0.75rem',
                              fontWeight: 500,
                              bgcolor: 'rgba(16, 32, 24, 0.08)',
                              color: 'text.primary',
                            }}
                          />
                        </Stack>

                        {/* title and progress */}
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 800,
                            fontSize: '1.08rem',
                            lineHeight: 1.25,
                            minHeight: 34,
                            display: 'flex',
                            alignItems: 'flex-start',
                            color: 'text.primary',
                            overflow: 'hidden',
                          }}
                        >
                          {c.title}
                        </Typography>
                        <Stack spacing={0.85} sx={{ mt: 'auto', pt: 1 }}>
                          <LinearProgress
                            variant="determinate"
                            value={pct}
                            sx={{
                              height: 8,
                              borderRadius: 99,
                              bgcolor: 'rgba(27, 94, 32, 0.22)',
                            }}
                          />
                          <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1.5}>
                            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.35, whiteSpace: 'nowrap' }}>
                              {money(c.raised)} raised
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'right', lineHeight: 1.35, whiteSpace: 'nowrap' }}>
                              Goal {money(c.goal)}
                            </Typography>
                          </Stack>
                          <Typography variant="caption" color="text.secondary" sx={{ lineHeight: 1.35 }}>{pct}% • {c.days} days left</Typography>
                        </Stack>
                      </CardContent>

                      <CardActions
                        sx={{
                          px: 2,
                          py: 1.75,
                          gap: 1,
                          minHeight: 74,
                          flex: '0 0 auto',
                          display: 'grid',
                          gridTemplateColumns: '1fr 1fr',
                          alignItems: 'center',
                        }}
                      >
                        <Button
                          variant="contained"
                          onClick={handleDonateOpen}
                          fullWidth
                          sx={{
                            minHeight: 44,
                            px: 1.5,
                            borderRadius: '10px',
                            fontWeight: 800,
                            boxShadow: '0 8px 18px rgba(27, 94, 32, 0.2)',
                            transition: 'transform 160ms ease, box-shadow 160ms ease',
                            '&:hover': {
                              transform: 'translateY(-1px)',
                              boxShadow: '0 12px 24px rgba(27, 94, 32, 0.26)',
                            },
                          }}
                        >
                          Donate Now
                        </Button>
                        <Button
                          variant="outlined"
                          onClick={() => handleDetailsOpen(c)}
                          fullWidth
                          sx={{
                            minHeight: 44,
                            px: 1.5,
                            borderRadius: '10px',
                            fontWeight: 800,
                            color: 'primary.main',
                            borderColor: 'rgba(27, 94, 32, 0.22)',
                            transition: 'transform 160ms ease, border-color 160ms ease, background-color 160ms ease',
                            '&:hover': {
                              transform: 'translateY(-1px)',
                              borderColor: 'primary.main',
                              bgcolor: 'rgba(27, 94, 32, 0.06)',
                            },
                          }}
                        >
                          Details
                        </Button>
                      </CardActions>
                  </Card>
                )
              })}
            </Box>
          </>
        )}

        <DialogDonate open={dialogDonateOpen} onClose={handleDonateClose} />

        {!selectedCampaign && (
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
        )}
      </Container>
    </Box>
  )
}

function DonationDetail({ campaign, onBack, onDonate }) {
  const pct = Math.min(100, Math.round((campaign.raised / campaign.goal) * 100));

  return (
    <Box>
      <Button
        startIcon={<ArrowBackRoundedIcon />}
        onClick={onBack}
        sx={{ mb: 3, color: 'primary.main', fontWeight: 800 }}
      >
        Kembali ke daftar donasi
      </Button>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: { xs: 3, md: 4 },
          alignItems: 'stretch',
        }}
      >
        <Box
          className="shadow-soft"
          sx={{
            minHeight: { xs: 280, md: 520 },
            borderRadius: '12px',
            overflow: 'hidden',
            bgcolor: '#fff',
          }}
        >
          <Box
            component="img"
            src={campaign.img}
            alt={campaign.title}
            sx={{
              width: '100%',
              height: '100%',
              minHeight: { xs: 280, md: 520 },
              display: 'block',
              objectFit: 'cover',
            }}
          />
        </Box>

        <Stack
          className="shadow-soft"
          sx={{
            borderRadius: '12px',
            bgcolor: '#fff',
            p: { xs: 2.5, sm: 4 },
            minHeight: { xs: 'auto', md: 520 },
            height: '100%',
            justifyContent: 'space-between',
            gap: { xs: 2.5, sm: 3 },
          }}
        >
          <Stack spacing={{ xs: 2.25, sm: 3 }}>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              <Chip size="small" label={campaign.tag} color="primary" />
              <Chip size="small" icon={<PlaceRoundedIcon />} label={campaign.location} />
            </Stack>

            <Box>
              <Typography
                component="h2"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '1.8rem', sm: '2.25rem', md: '2.45rem' },
                  lineHeight: 1.08,
                  color: 'text.primary',
                  letterSpacing: 0,
                }}
              >
                {campaign.title}
              </Typography>
              <Typography
                sx={{
                  mt: 1.75,
                  color: 'text.secondary',
                  fontSize: { xs: '1rem', md: '1.08rem' },
                  lineHeight: 1.75,
                  maxWidth: 620,
                }}
              >
                {campaign.description}
              </Typography>
            </Box>

            <Stack spacing={1.5}>
              <LinearProgress variant="determinate" value={pct} sx={{ height: 11, borderRadius: 99 }} />
              <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" spacing={0.75}>
                <Typography fontWeight={800} color="primary.main">{money(campaign.raised)} terkumpul</Typography>
                <Typography color="text.secondary">Target {money(campaign.goal)}</Typography>
              </Stack>
            </Stack>
          </Stack>

          <Stack spacing={{ xs: 2.25, sm: 3 }}>
            <Divider />

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, minmax(0, 1fr))' },
                gap: 1.5,
              }}
            >
              <DetailMetric icon={<CalendarMonthRoundedIcon />} label="Sisa waktu" value={`${campaign.days} hari`} />
              <DetailMetric icon={<GroupsRoundedIcon />} label="Penerima" value={campaign.beneficiaries} />
              <DetailMetric icon={<TrendingUpRoundedIcon />} label="Progress" value={`${pct}%`} />
            </Box>

            <Button
              variant="contained"
              color="secondary"
              size="large"
              fullWidth
              onClick={onDonate}
              sx={{
                color: 'primary.main',
                fontWeight: 800,
                borderRadius: '10px',
                minHeight: 56,
                px: 4,
              }}
            >
              Ayo Bantu Mereka!
            </Button>
          </Stack>
        </Stack>
      </Box>

      <Box
        sx={{
          mt: { xs: 4, md: 5 },
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 3,
        }}
      >
        <DetailList title="Dana digunakan untuk" items={campaign.funds} />
        <DetailList title="Dampak donasi Anda" items={campaign.impact} />
      </Box>
    </Box>
  );
}

function DetailMetric({ icon, label, value }) {
  return (
    <Stack
      spacing={1}
      sx={{
        border: '1px solid rgba(27, 94, 32, 0.12)',
        borderRadius: '10px',
        p: { xs: 1.5, sm: 2 },
        bgcolor: 'rgba(27, 94, 32, 0.04)',
        minHeight: 104,
        height: '100%',
        justifyContent: 'center',
        minWidth: 0,
      }}
    >
      <Stack direction="row" alignItems="center" spacing={0.75} color="primary.main" sx={{ minWidth: 0 }}>
        <Box sx={{ display: 'grid', placeItems: 'center', flex: '0 0 auto' }}>
          {icon}
        </Box>
        <Typography variant="caption" fontWeight={800}>
          {label}
        </Typography>
      </Stack>
      <Typography
        fontWeight={800}
        sx={{
          fontSize: { xs: '1.35rem', sm: '1.28rem', md: '1.32rem' },
          lineHeight: 1.25,
          wordBreak: 'break-word',
        }}
      >
        {value}
      </Typography>
    </Stack>
  );
}

function DetailList({ title, items }) {
  return (
    <Box
      className="shadow-soft"
      sx={{
        bgcolor: '#fff',
        borderRadius: '12px',
        p: { xs: 2.5, sm: 3 },
      }}
    >
      <Typography variant="h6" fontWeight={800} color="text.primary">
        {title}
      </Typography>
      <Stack component="ul" spacing={1.25} sx={{ mt: 2, pl: 2.5, mb: 0 }}>
        {items.map((item) => (
          <Typography component="li" key={item} sx={{ color: 'text.secondary', lineHeight: 1.65 }}>
            {item}
          </Typography>
        ))}
      </Stack>
    </Box>
  );
}
