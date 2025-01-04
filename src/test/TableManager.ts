import React, { useState, ReactNode } from 'react'

interface TableData {
  id: number
  name: string
  age: number
}

interface TableManagerProps {
  data: TableData[]
  render: (props: {
    filteredData: TableData[]
    handleFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleSort: (key: keyof TableData) => void
  }) => ReactNode
}

function TableManager({ data, render }: TableManagerProps) {
  const [filter, setFilter] = useState('')
  const [sortBy, setSortBy] = useState<keyof TableData | null>(null)

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value)
  }

  const handleSort = (key: keyof TableData) => {
    setSortBy(key)
  }

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  )

  const sortedData = sortBy
    ? [...filteredData].sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1))
    : filteredData

  return render({ filteredData: sortedData, handleFilterChange, handleSort })
}

export default TableManager
