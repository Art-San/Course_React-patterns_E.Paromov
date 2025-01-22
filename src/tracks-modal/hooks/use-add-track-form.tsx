import { useState } from 'react'
import { Track } from '../../hooks/use-tracks'

const defaultFormData = {
  name: '',
  task: '',
  hours: 0,
  date: new Date().toISOString().split('T')[0]
}
export function useAddTrackForm({
  trackCreate,
  onSubmit
}: {
  trackCreate: (track: Omit<Track, 'id'>) => Promise<void>
  onSubmit?: () => void
}) {
  const [formData, setFormData] = useState(defaultFormData)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'hours' ? parseFloat(value) || 0 : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    trackCreate({
      name: formData.name,
      task: formData.task,
      hours: formData.hours,
      date: formData.date
    }).finally(() => {
      setFormData(defaultFormData)
      onSubmit?.()
    })
  }

  return {
    formData,
    handleInputChange,
    handleSubmit
  }
}
