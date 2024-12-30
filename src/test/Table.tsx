export interface TableProps {
  headerSlot: React.ReactNode
  bodySlot: React.ReactNode
  filterSlot: React.ReactNode
}

export function Table({
  filterSlot,
  headerSlot,
  bodySlot
}: TableProps): JSX.Element {
  return (
    <div>
      {filterSlot}
      <table>
        <thead>{headerSlot}</thead>
        <tbody>{bodySlot}</tbody>
      </table>
    </div>
  )
}
