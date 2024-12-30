export type Data = {
  id: number
  name: string
  age: number
}

export function TableBody({ data }: { data: Data[] }) {
  return (
    <>
      {data.map((item) => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.age}</td>
        </tr>
      ))}
    </>
  )
}
