import { useTrackModalContext } from './track-modal-context'

export function useTracksModalOpen() {
  const context = useTrackModalContext()
  // const context = useContext(trackModalContext)

  // if (!context) {
  //   throw new Error('useTrackModal must be used within a TrackModalProvider')
  // }
  return {
    createClick: context.createClick,
    cellClick: context.cellClick,
    trackClick: context.trackClick
  }
}
