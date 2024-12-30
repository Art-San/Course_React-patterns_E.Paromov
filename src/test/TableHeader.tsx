interface TableHeaderProps {
  onSort: (key: string) => void
}

export function TableHeader({ onSort }: TableHeaderProps): JSX.Element {
  return (
    <tr>
      <th onClick={() => onSort('id')}>ID</th>
      <th onClick={() => onSort('name')}>Имя</th>
      <th onClick={() => onSort('age')}>Возраст</th>
    </tr>
  )
}
