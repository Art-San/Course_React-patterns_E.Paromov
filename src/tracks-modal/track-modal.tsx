import { Track } from '../App'
import { TrackModalView } from './components/track-modal'
import { useTrackForm } from './hooks/use-track-form'
import { TrackForm } from './components/track-form'
import { useTrackModalContext } from './components/track-modal-context'

export function TrackModal({
  trackUpdate,
  trackCreate,
  selectedMonth,
  selectedYear
}: {
  trackCreate: (track: Omit<Track, 'id'>) => void
  trackUpdate: (track: Track) => void
  selectedMonth: number
  selectedYear: number
}) {
  // const context = useContext(trackModalContext)
  // if (!context) {
  //   throw new Error('useTrackModal must be used within a TrackModalProvider')
  // }

  const { close, isOpenModal, selectedCell, selectedTrack } =
    useTrackModalContext()

  const { formData, handleInputChange, handleSubmit, isEdit } = useTrackForm({
    selectedMonth,
    selectedYear,
    selectedCell,
    selectedTrack,
    trackUpdate,
    trackCreate
  })

  if (!isOpenModal) return null

  return (
    <TrackModalView isEdit={isEdit} close={close}>
      <TrackForm
        formData={formData}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
        onCancel={close}
        isEdit={isEdit}
      />
    </TrackModalView>
  )
}
