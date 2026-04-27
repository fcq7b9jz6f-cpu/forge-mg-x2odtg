import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import { motion, AnimatePresence } from 'framer-motion'

const Home = lazy(() => import('./pages/Home'))
const Biography = lazy(() => import('./pages/Biography'))
const Songs = lazy(() => import('./pages/Songs'))
const Gallery = lazy(() => import('./pages/Gallery'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      <Navbar />
      <AnimatePresence mode="wait">
        <Suspense
          fallback={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center min-h-[60vh]"
            >
              <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            </motion.div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/biography" element={<Biography />} />
            <Route path="/songs" element={<Songs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App
