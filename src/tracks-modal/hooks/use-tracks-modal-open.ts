import { useContext } from 'react'
import { trackModalContext } from '../components/track-modal-context'

export function useTrackModalOpen() {
  const context = useContext(trackModalContext)

  if (!context) {
    throw new Error('useTrackModal must be used within a TrackModalProvider')
  }
  return {
    createClick: context.createClick,
    cellClick: context.cellClick,
    trackClick: context.trackClick
  }
}
