import { useRef } from 'react'
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material'
import Navbar from './components/Navbar.jsx'
import Home from './sections/Home.jsx'
import About from './sections/About.jsx'
import Events from './sections/Events.jsx'
import Contact from './sections/Contact.jsx'
import './App.css'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1b5e20' },
    secondary: { main: '#ffd166' },
    background: { default: '#fbf7ef', paper: '#ffffff' },
    text: { primary: '#102018' },
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: 'Inter, system-ui, Arial',
    h1: { fontWeight: 800 },
    h2: { fontWeight: 800 },
    h3: { fontWeight: 700 },
    button: { textTransform: 'none', fontWeight: 600 }
  },
  components: {
    MuiButton: { styleOverrides: { root: { borderRadius: 999 } } },
    MuiCard: { styleOverrides: { root: { borderRadius: 18 } } },
  }
})

export default function App(){
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const eventsRef = useRef(null)
  const contactRef = useRef(null)

  const sections = {
    Home: homeRef,
    About: aboutRef,
    Events: eventsRef,
    Contact: contactRef,
  }

  const scrollTo = (key) => {
    const r = sections[key]
    if(r?.current){ r.current.scrollIntoView({ behavior: 'smooth', block: 'start' }) }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar onNav={scrollTo} />
      <Box component="main" sx={{ pt: { xs: 7, md: 8 } }}>
        <div ref={homeRef} id="home" className="section"><Home onDonate={() => scrollTo('Events')} /></div>
        <div ref={aboutRef} id="about" className="section"><About /></div>
        <div ref={eventsRef} id="events" className="section"><Events /></div>
        <div ref={contactRef} id="contact" className="section"><Contact /></div>
      </Box>
    </ThemeProvider>
  )
}