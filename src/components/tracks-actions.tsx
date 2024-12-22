import React from 'react'
import styles from './tracks-actions.module.css'
import { Track } from '../App'

export function TracksAction({
  handleUpdateTrack,
  handleDeleteTrack,
  track
}: {
  track: Track
  handleUpdateTrack: (e: React.MouseEvent, track: Track) => void
  handleDeleteTrack: (e: React.MouseEvent, track: string) => void
}) {
  return (
    <>
      <button
        className={styles.actionButton}
        onClick={(e) => handleUpdateTrack(e, track)}
        title="Edit"
      >
        ✎
      </button>
      <button
        className={`${styles.actionButton} ${styles.deleteButton}`}
        onClick={(e) => handleDeleteTrack(e, track.id)}
        title="Delete"
      >
        ×
      </button>
    </>
  )
}
