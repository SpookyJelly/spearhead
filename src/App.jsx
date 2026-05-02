import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import FactionPage from './pages/FactionPage/FactionPage'
import SpearheadPage from './pages/SpearheadPage/SpearheadPage'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/faction/:id" element={<FactionPage />} />
          <Route path="/faction/:id/spearhead" element={<SpearheadPage />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
