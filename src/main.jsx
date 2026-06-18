import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Memories from './Memories.jsx';
import Landing from './Landing.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <Landing/>
    <Memories/>
    </>
    
  </StrictMode>,
)
