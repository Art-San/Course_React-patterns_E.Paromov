import React from 'react'
import TableManager from './TableManager'

function Table() {
  const data = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 },
    { id: 4, name: 'Anna', age: 35 },
    { id: 5, name: 'Babucho', age: 35 }
  ]

  return (
    <TableManager
      data={data}
      render={({ filteredData, handleFilterChange, handleSort }) => (
        <div>
          <input
            type="text"
            placeholder="Фильтр по имени"
            onChange={handleFilterChange}
          />
          <table>
            <thead>
              <tr>
                <th onClick={() => handleSort('id')}>ID</th>
                <th onClick={() => handleSort('name')}>Имя</th>
                <th onClick={() => handleSort('age')}>Возраст</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    />
  )
}

export default Table
