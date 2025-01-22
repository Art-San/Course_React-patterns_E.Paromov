import { Track } from '../App'
import { TrackModalView } from './components/track-modal'
import { TrackForm } from './components/track-form'
import { useTrackModalContext } from './components/track-modal-context'
import { useAddTrackForm } from './hooks/use-add-track-form'

export function AddTrackModal({
  trackCreate
}: {
  trackCreate: (track: Omit<Track, 'id'>) => Promise<void>
}) {
  const { close, isOpenModal } = useTrackModalContext()

  const { formData, handleInputChange, handleSubmit } = useAddTrackForm({
    trackCreate,
    onSubmit: close
  })

  if (!isOpenModal) return null

  return (
    <TrackModalView title={'Add Track'} close={close}>
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
