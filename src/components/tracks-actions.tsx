import React from 'react'
import styles from './tracks-actions.module.css'
import { Track } from '../App'

export function TracksAction({
  onUpdateTrack,
  onDeleteTrack,
  track
}: {
  track: Track
  onUpdateTrack: (track: Track) => void
  onDeleteTrack: (trackId: string) => void
}) {
  return (
    <>
      <button
        className={styles.actionButton}
        onClick={(e) => {
          e.stopPropagation()
          onUpdateTrack(track)
        }}
        title="Edit"
      >
        ✎
      </button>
      <button
        className={`${styles.actionButton} ${styles.deleteButton}`}
        onClick={(e) => onDeleteTrack(track.id)}
        title="Delete"
      >
        ×
      </button>
    </>
  )
}
