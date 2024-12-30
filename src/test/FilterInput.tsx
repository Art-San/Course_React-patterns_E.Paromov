import React from 'react'

interface FilterInputProps {
  filter: string
  onFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function FilterInput({
  filter,
  onFilterChange
}: FilterInputProps): JSX.Element {
  return (
    <input
      type="text"
      placeholder="Фильтр по имени"
      value={filter}
      onChange={onFilterChange}
    />
  )
}
