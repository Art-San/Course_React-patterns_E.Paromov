import { useEffect } from 'react'
import { Track } from '../../hooks/use-tracks'
import { useFormData } from './use-form-data'
import { SelectedCell } from '../types'

export function useAddTrackTocCell({
  trackCreate,
  onSubmit,
  selectedCell
}: {
  trackCreate: (track: Omit<Track, 'id'>) => Promise<void>
  onSubmit?: () => void
  selectedCell: SelectedCell | null
}) {
  const { formData, setFormData, handleInputChange, resetFormData } =
    useFormData()

  useEffect(() => {
    if (selectedCell) {
      setFormData({
        name: '',
        task: selectedCell.task,
        hours: 0,
        date: `${selectedCell.selectedYear}-${String(
          selectedCell.selectedMonth + 1
        ).padStart(2, '0')}-${String(selectedCell.day).padStart(2, '0')}`
      })
    } else {
      resetFormData()
    }
  }, [selectedCell])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    trackCreate({
      name: formData.name,
      task: formData.task,
      hours: formData.hours,
      date: formData.date
    }).finally(() => {
      resetFormData()
      onSubmit?.()
    })
  }

  return {
    formData,
    handleInputChange,
    handleSubmit
  }
}
