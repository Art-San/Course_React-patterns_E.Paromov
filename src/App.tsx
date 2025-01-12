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
import { TrackModal } from './tracks-modal/components/track-modal'
import { useTrackModalOpen } from './tracks-modal/hooks/use-tracks-modal-open'
import { TrackModalProvider } from './tracks-modal/components/track-modal-context'

export interface Track {
  id: string
  name: string
  task: string
  hours: number
  date: string
}

const AppContent = () => {
  const { tracks, trackDelete, trackUpdate, trackCreate } = useTracks()
  const { filteredTracks, filters, setFilters, visibleDays } = useTracksFilter({
    tracks
  })
  // const { selectedMonth, selectedYear } = filters

  const { uniqueTasks } = useTasks({ tracks: filteredTracks })

  const { getDayTracks, getDayTotal, getTaskTotal, getTotal } =
    useTableComputing({ tracks: filteredTracks })

  const { createClick, cellClick, trackClick } = useTrackModalOpen()

  // const {
  //   isOpenModal,
  //   selectedCell,
  //   selectedTrack,
  //   cellClick,
  //   trackClick,
  //   close,
  //   createClick
  // } = useTrackModal()

  // const { formData, handleInputChange, handleSubmit } = useTrackForm({
  //   // selectedMonth,
  //   // selectedYear,
  //   ...filters,
  //   selectedCell,
  //   selectedTrack,
  //   trackUpdate,
  //   trackCreate
  // })

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

      <TrackModal
        selectedMonth={filters.selectedMonth}
        selectedYear={filters.selectedYear}
        trackCreate={trackCreate}
        trackUpdate={trackUpdate}
      />
      {/* {isOpenModal && (
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
      )} */}
    </div>
  )
}

export default function App() {
  return (
    <TrackModalProvider>
      <AppContent />
    </TrackModalProvider>
  )
}
