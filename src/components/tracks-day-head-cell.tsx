import styles from './tracks-day-head-cell.module.css'

export function TracksDayHeadCell({
  day,
  selectedMonth,
  selectedYear,
  currentDayRef,
  getWeekday
}: {
  day: number
  selectedMonth: number
  selectedYear: number
  currentDayRef: React.RefObject<HTMLTableCellElement>
  getWeekday: (day: number) => string
}) {
  const isCurrentDay =
    new Date().getDate() === day &&
    new Date().getMonth() === selectedMonth &&
    new Date().getFullYear() === selectedYear
  return (
    <th
      key={day}
      ref={isCurrentDay ? currentDayRef : null}
      className={isCurrentDay ? styles.currentDay : undefined}
    >
      <div className={styles.dayHeader}>
        <span>{day}</span>
        <span className={styles.weekday}>{getWeekday(day)}</span>
      </div>
    </th>
  )
}