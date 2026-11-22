import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './home/Home'
import Photos from './photos/Photos'
import Nature from './photos/nature/Nature'
import Travel from './photos/travel/Travel'
import Wallpapers from './photos/wallpapers/Wallpapers'

const MainRoute = () => {
  return (
   <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/photos/nature" element={<Nature />} />
          <Route path="/photos/travel" element={<Travel />} />
          <Route path="/photos/wallpapers" element={<Wallpapers />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MainRoute