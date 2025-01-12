import React, { createContext } from 'react'
import { useTrackModal } from '../hooks/use-track-modal'
// import { Track } from '../../App'

// type TrackModalContext = {
//   close: () => void
//   createClick: () => void
//   isOpenModal: boolean
//   selectedCell: number
//   selectedTrack: number
//   trackClick: (track: Track) => void
//   cellClick: (day: number, task: string) => void
// }

type TrackModalContext = ReturnType<typeof useTrackModal>
export const trackModalContext = createContext<TrackModalContext | null>(null)

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

// import { createContext, useContext } from 'react'

// import { useTrackModal } from '../hooks/use-track-modal'

// type TrackModalContext = ReturnType<typeof useTrackModal>
// export const trackModalContext = createContext<TrackModalContext | null>(null)

// export const useTrackModalContext = () => {
//   const context = useContext(trackModalContext)
//   if (!context) {
//     throw new Error('useTrackModal must be used within a TrackModalProvider')
//   }
//   return context
// }
