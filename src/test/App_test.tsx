import { useState } from 'react'
import { TableBody } from './TableBody'
import { TableHeader } from './TableHeader'
import { FilterInput } from './FilterInput'
import { Table } from './Table'

export function GodComponentTable() {
  const [data, setData] = useState([
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 },
    { id: 4, name: 'Charlie', age: 35 },
    { id: 5, name: 'Charlie', age: 35 }
  ])

  const [filter, setFilter] = useState('')
  const [sortBy, setSortBy] = useState(null)

  const handleFilterChange = (e: any) => {
    setFilter(e.target.value)
  }

  const handleSort = (key: any) => {
    setSortBy(key)
  }

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  )

  const sortedData = sortBy
    ? [...filteredData].sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1))
    : filteredData

  return (
    <Table
      filterSlot={
        <FilterInput filter={filter} onFilterChange={handleFilterChange} />
      }
      headerSlot={<TableHeader onSort={handleSort} />}
      bodySlot={<TableBody data={sortedData} />}
    />
  )
}
