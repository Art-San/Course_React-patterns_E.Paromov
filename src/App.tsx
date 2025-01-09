import { useEffect, useState, useRef } from 'react'
import styles from './App.module.css'
import { TracksAction } from './components/tracks-actions'
import { TracksCell } from './components/tracks-cell'
import { TracksTaskRow } from './components/tracks-task-row'
import { TableTrack } from './components/table-track'
import { TracksSummaryRow } from './components/tracks-summary-row'
import { TracksDayHeadCell } from './components/tracks-day-head-cell'
import { TracksTable } from './components/tracks-table'
import { useTracks } from './hooks/use-tracks'
import { useTracksFilter } from './hooks/use-tracks-filter'
import { TracksFilters } from './components/tracks-filters'
import { useTasks } from './hooks/use-tasks'
import { useTableComputing } from './hooks/use-table-comuting'
import { useTrackForm } from './hooks/use-track-form'
import { useTrackModal } from './hooks/use-track-modal'

export interface Track {
  id: string
  name: string
  task: string
  hours: number
  date: string
}

const App = () => {
  const { tracks, trackDelete, trackUpdate, trackCreate } = useTracks()
  const { filteredTracks, filters, setFilters, visibleDays } = useTracksFilter({
    tracks
  })
  // const { selectedMonth, selectedYear } = filters

  const { uniqueTasks } = useTasks({ tracks: filteredTracks })

  const { getDayTracks, getDayTotal, getTaskTotal, getTotal } =
    useTableComputing({ tracks: filteredTracks })

  // const [isModalOpen, setIsModalOpen] = useState(false)

  const {
    isOpenModal,
    selectedCell,
    selectedTrack,
    cellClick,
    trackClick,
    close,
    createClick
  } = useTrackModal()

  const { formData, handleInputChange, handleSubmit } = useTrackForm({
    // selectedMonth,
    // selectedYear,
    ...filters,
    selectedCell,
    selectedTrack,
    trackUpdate,
    trackCreate
  })

  // const [tracks, setTracks] = useState<Track[]>([])
  // const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth())
  // const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
  // const [hideWeekends, setHideWeekends] = useState(false)

  // const [formData, setFormData] = useState({
  //   name: '',
  //   task: '',
  //   hours: 0,
  //   date: new Date().toISOString().split('T')[0]
  // })

  // useEffect(() => {
  //   fetchTracks()
  // }, [selectedMonth, selectedYear])

  // useEffect(() => {
  //   if (selectedCell) {
  //     setFormData((prev) => ({
  //       ...prev,
  //       task: selectedCell.task,
  //       date: `${selectedYear}-${String(selectedMonth + 1).padStart(
  //         2,
  //         '0'
  //       )}-${String(selectedCell.day).padStart(2, '0')}`
  //     }))
  //   } else {
  //     setFormData({
  //       name: '',
  //       task: '',
  //       hours: 0,
  //       date: new Date().toISOString().split('T')[0]
  //     })
  //   }
  // }, [selectedCell, selectedMonth, selectedYear])

  // useEffect(() => {
  //   fetchTracks()
  // }, [selectedMonth, selectedYear])

  // const fetchTracks = async () => {
  //   try {
  //     const response = await fetch('http://localhost:3001/tracks')
  //     console.log(123, response)
  //     const data = await response.json()
  //     setTracks(data)
  //   } catch (error) {
  //     console.error('Error fetching tracks:', error)
  //   }
  // }

  // const getUniqueTasks = () => {
  //   const monthTracks = tracks.filter((track) => {
  //     const trackDate = new Date(track.date)
  //     return (
  //       trackDate.getMonth() === selectedMonth &&
  //       trackDate.getFullYear() === selectedYear
  //     )
  //   })
  //   return [...new Set(monthTracks.map((track) => track.task))]
  // }

  // const getDaysInMonth = () => {
  //   return new Date(selectedYear, selectedMonth + 1, 0).getDate()
  // }

  // const getVisibleDays = () => {
  //   const days = Array.from({ length: getDaysInMonth() }, (_, i) => i + 1)
  //   return hideWeekends ? days.filter((day) => !isWeekend(day)) : days
  // }

  // const isWeekend = (day: number) => {
  //   const date = new Date(selectedYear, selectedMonth, day)
  //   return date.getDay() === 0 || date.getDay() === 6
  // }

  // const getDayTracks = (day: number, task: string) => {
  //   return tracks.filter((track) => {
  //     const trackDate = new Date(track.date)
  //     return (
  //       trackDate.getDate() === day &&
  //       trackDate.getMonth() === selectedMonth &&
  //       trackDate.getFullYear() === selectedYear &&
  //       track.task === task
  //     )
  //   })
  // }

  // const getDayTotal = (day: number) => {
  //   return tracks
  //     .filter((track) => {
  //       const trackDate = new Date(track.date)
  //       return (
  //         trackDate.getDate() === day &&
  //         trackDate.getMonth() === selectedMonth &&
  //         trackDate.getFullYear() === selectedYear
  //       )
  //     })
  //     .reduce((sum, track) => sum + track.hours, 0)
  // }

  // const getTaskTotal = (task: string) => {
  //   return tracks
  //     .filter((track) => {
  //       const trackDate = new Date(track.date)
  //       return (
  //         trackDate.getMonth() === selectedMonth &&
  //         trackDate.getFullYear() === selectedYear &&
  //         track.task === task
  //       )
  //     })
  //     .reduce((sum, track) => sum + track.hours, 0)
  // }

  // const getMonthTotal = () => {
  //   return tracks
  //     .filter((track) => {
  //       const trackDate = new Date(track.date)
  //       return (
  //         trackDate.getMonth() === selectedMonth &&
  //         trackDate.getFullYear() === selectedYear
  //       )
  //     })
  //     .reduce((sum, track) => sum + track.hours, 0)
  // }

  // const handleCellClick = (day: number, task: string) => {
  //   console.log({ day, task })
  //   setSelectedCell({ day, task })
  // }

  // .. удалили
  // const handleUpdateTrack = (e: React.MouseEvent, track: Track) => {
  //   e.stopPropagation()
  //   setSelectedTrack(track)

  //   setIsModalOpen(true)
  // }
  // .. удалили
  // const handleDeleteTrack = async (e: React.MouseEvent, trackId: string) => {
  //   e.stopPropagation()
  //   trackDelete(trackId)
  // }

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault()

  //   if (selectedCell && selectedTrack) {
  //     trackUpdate({
  //       ...selectedTrack,
  //       name: formData.name,
  //       task: formData.task,
  //       hours: formData.hours,
  //       date: formData.date
  //     })
  //   } else {
  //     trackCreate({
  //       name: formData.name,
  //       task: formData.task,
  //       hours: formData.hours,
  //       date: formData.date
  //     })
  //   }
  // }

  // const handleInputChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  // ) => {
  //   const { name, value } = e.target
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: name === 'hours' ? parseFloat(value) || 0 : value
  //   }))
  // }

  // const months = [
  //   'January',
  //   'February',
  //   'March',
  //   'April',
  //   'May',
  //   'June',
  //   'July',
  //   'August',
  //   'September',
  //   'October',
  //   'November',
  //   'December'
  // ]

  // const getWeekday = (day: number) => {
  //   const date = new Date(selectedYear, selectedMonth, day)
  //   return date.toLocaleDateString('en-US', { weekday: 'short' })
  // }

  return (
    <div className={styles.container}>
      <TracksFilters
        {...filters}
        {...setFilters}
        actions={
          <button className={styles.button} onClick={() => createClick()}>
            Add Track
          </button>
        }
      />

      {/* <div className={styles.header}>
        <button className={styles.button} onClick={() => setIsModalOpen(true)}>
          Add Track
        </button>
        <select
          className={styles.select}
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
        >
          {months.map((month, index) => (
            <option key={month} value={index}>
              {month}
            </option>
          ))}
        </select>
        <select
          className={styles.select}
          value={selectedYear}
          onChange={(e) => setSelectedYear(parseInt(e.target.value))}
        >
          {Array.from({ length: 5 }, (_, i) => selectedYear - 2 + i).map(
            (year) => (
              <option key={year} value={year}>
                {year}
              </option>
            )
          )}
        </select>
        <div className={styles.checkboxContainer}>
          <input
            type="checkbox"
            id="hideWeekends"
            className={styles.checkbox}
            checked={hideWeekends}
            onChange={(e) => setHideWeekends(e.target.checked)}
          />
          <label htmlFor="hideWeekends" className={styles.checkboxLabel}>
            Hide Weekends
          </label>
        </div>
      </div> */}

      <TracksTable
        tasks={uniqueTasks}
        renderDays={(currentDayRef) =>
          visibleDays.map((day) => (
            <TracksDayHeadCell
              key={day}
              day={day}
              {...filters}
              // selectedMonth={filters.selectedMonth}
              // selectedYear={filters.selectedYear}
              currentDayRef={currentDayRef}
            />
          ))
        }
        renderTask={(task) => (
          <TracksTaskRow
            getTaskTotal={getTaskTotal}
            task={task}
            days={visibleDays.map((day) => (
              <TracksCell
                day={day}
                task={task}
                getDayTracks={getDayTracks}
                onCellClick={cellClick}
                tracks={getDayTracks(day, task).map((track) => (
                  <TableTrack
                    key={track.id}
                    track={track}
                    actions={
                      <TracksAction
                        track={track}
                        onUpdateTrack={trackClick}
                        onDeleteTrack={trackDelete}
                      />
                    }
                  />
                ))}
              />
            ))}
          />
        )}
        summary={
          <TracksSummaryRow
            getDayTotal={getDayTotal}
            visibleDays={visibleDays}
            getMonthTotal={getTotal}
          />
        }
      ></TracksTable>

      {isOpenModal && (
        <div className={styles.modalOverlay} onClick={() => close()}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h2>{selectedTrack ? 'Edit Track' : 'Add Track'}</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="task">Task:</label>
                <input
                  type="text"
                  id="task"
                  name="task"
                  value={formData.task}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="hours">Hours:</label>
                <input
                  type="number"
                  id="hours"
                  name="hours"
                  value={formData.hours}
                  onChange={handleInputChange}
                  min="0"
                  step="0.5"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="date">Date:</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className={styles.buttonGroup}>
                <button type="submit" className={styles.button}>
                  {selectedTrack ? 'Update' : 'Add'} Track
                </button>
                <button
                  type="button"
                  className={styles.button}
                  onClick={() => close()}
                  style={{ backgroundColor: '#6c757d' }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
