import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TracksApiProvider } from './hooks/tracks-api-context.tsx'
import { tracksApi } from './services/tracks-api.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <TracksApiProvider value={mockTracksApi}> */}
    <TracksApiProvider value={tracksApi}>
      <App />
    </TracksApiProvider>
  </StrictMode>
)
