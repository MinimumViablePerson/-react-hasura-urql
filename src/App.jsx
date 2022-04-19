import { useQuery } from 'urql'
import './App.css'

const getPets = `
  query {
    pets {
      id
      name
      user {
        name
      }
    }
  }
`

function App () {
  const [{ fetching, error, data }] = useQuery({ query: getPets })

  if (fetching) return <div>Loading...</div>
  if (error) return <div>Error!</div>

  return (
    <div className='App'>
      <h1>Hello!</h1>
      {data.pets.map(pet => {
        return (
          <div key={pet.id}>
            {pet.name} ({pet.user.name})
          </div>
        )
      })}
    </div>
  )
}

export default App
