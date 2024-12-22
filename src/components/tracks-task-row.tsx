export function TracksTaskRow({
  task,
  getTaskTotal,
  days
}: {
  task: string
  getTaskTotal: (task: string) => number
  days: React.ReactNode
}) {
  return (
    <tr key={task}>
      <td>{task}</td>
      {days}
      <td>{getTaskTotal(task)}</td>
    </tr>
  )
}
