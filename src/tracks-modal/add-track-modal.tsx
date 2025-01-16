import { Track } from '../App'
import { TrackModalView } from './components/track-modal'
import { useTrackForm } from './hooks/use-track-form'
import { TrackForm } from './components/track-form'
import { useTrackModalContext } from './components/track-modal-context'

export function TrackModal({
  trackCreate,
  selectedMonth,
  selectedYear
}: {
  trackCreate: (track: Omit<Track, 'id'>) => void

  selectedMonth: number
  selectedYear: number
}) {
  const { close, isOpenModal } = useTrackModalContext()

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
