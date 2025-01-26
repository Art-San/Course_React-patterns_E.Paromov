import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import { useTracksApi } from './tracks-api-context'

export interface Track {
  id: string
  name: string
  task: string
  hours: number
  date: string
}

export function useTracks() {
  const api = useTracksApi()
  const [tracks, setTracks] = useState<Track[]>([])

  useEffect(() => {
    fetchTracks()
  }, [])

  const fetchTracks = async () => {
    const data = await api.fetchTracks()
    setTracks(data)
  }

  const trackDelete = async (trackId: string) => {
    console.log(999, 'fun trackDelete')
    // if (!window.confirm('Are you sure you want to delete this track?')) {
    //   return
    // }
    // await api.deleteTrack(trackId)
    fetchTracks()
  }

  const trackUpdate = async (track: Track) => {
    await api.updateTrack(track)
    fetchTracks()
  }

  const trackCreate = async (track: Omit<Track, 'id'>) => {
    const newTrack = {
      ...track,
      id: nanoid()
    }

    await api.createTrack(newTrack)
    fetchTracks()
  }

  return {
    tracks,
    trackDelete,
    trackUpdate,
    trackCreate
  }
}
