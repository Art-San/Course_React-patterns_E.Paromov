import { Track } from '../../App'
import { TrackModalView } from '../shared/track-modal'
import { TrackForm } from '../shared/track-form'
import { useTrackModalContext } from '../shared/track-modal-context'
import { useUpdateTrackForm } from './use-update-track-form'

export function UpdateTrackModal({
  trackUpdate
}: {
  trackUpdate: (track: Track) => Promise<void>
}) {
  const { close, isOpenModal, selectedTrack } = useTrackModalContext()

  const { formData, handleInputChange, handleSubmit } = useUpdateTrackForm({
    selectedTrack,
    onSubmit: close,
    trackUpdate
  })

  if (!isOpenModal) return null

  return (
    <TrackModalView title={'Update'} close={close}>
      <TrackForm
        formData={formData}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
        onCancel={close}
        submitText="Update Track"
      />
    </TrackModalView>
  )
}
