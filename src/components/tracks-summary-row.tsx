export function TracksSummaryRow({
  visibleDays,
  getDayTotal,
  getMonthTotal
}: {
  // getTaskTotal: (task: string) => number
  // days: React.ReactNode
  getMonthTotal: () => number
  visibleDays: number[]
  getDayTotal: (day: number) => number
}) {
  return (
    <tr>
      <td>Total</td>
      {visibleDays.map((day) => (
        <td key={`total-${day}`}>{getDayTotal(day)}</td>
      ))}
      <td>{getMonthTotal()}</td>
    </tr>
  )
}
