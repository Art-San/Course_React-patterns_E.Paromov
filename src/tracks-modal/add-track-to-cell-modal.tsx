import { Track } from '../App'
import { TrackModalView } from './components/track-modal'
import { TrackForm } from './components/track-form'
import { useTrackModalContext } from './components/track-modal-context'

import { useAddTrackTocCell } from './hooks/use-add-track-to-cell'

export function AddTrackToCellModal({
  trackCreate
}: {
  trackCreate: (track: Omit<Track, 'id'>) => Promise<void>
}) {
  const { close, isOpenModal, selectedCell } = useTrackModalContext()

  const { formData, handleInputChange, handleSubmit } = useAddTrackTocCell({
    trackCreate,
    onSubmit: close,
    selectedCell
  })

  if (!isOpenModal) return null

  return (
    <TrackModalView title={'Add Track To Cell'} close={close}>
      <TrackForm
        formData={formData}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
        onCancel={close}
        submitText="Add Track"
      />
    </TrackModalView>
  )
}
