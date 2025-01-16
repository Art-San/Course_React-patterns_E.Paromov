import { trackModalContext } from './components/track-modal-context'
import { useTrackModal } from './hooks/use-track-modal'

export function TrackModalProvider({
  children
}: {
  children: React.ReactNode
}) {
  const trackModal = useTrackModal()
  return (
    <trackModalContext.Provider value={trackModal}>
      {children}
    </trackModalContext.Provider>
  )
}