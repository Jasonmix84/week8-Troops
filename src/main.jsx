import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './index.css'
import App from './App.jsx'
import NotFound from './routes/NotFound'
import Layout from './routes/Layout'
import Create from './routes/Create.jsx'
import Gallery from './routes/Gallery.jsx'
import DetailView from './routes/DetailView.jsx'
import Edit from './routes/Edit.jsx'



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<App />} />
      <Route path="/Edit/:id" element={<Edit />}/>
      <Route path="/Troop/:id" element={<DetailView />}/>
      <Route path="Create" element={<Create />} />
      <Route path="Gallery" element={<Gallery />} />
    <Route path="*" element={ <NotFound /> } />
    </Route>
  </Routes>
  </BrowserRouter>
)
