import { useState } from 'react'
import { Navbar } from './components/navbar'
import { Newsboard } from './components/newsboard'
import { Newsitem } from './components/newsitem'

function App() {
  const [category, setCategory] = useState("general")

  return (
    <>
      <Navbar setCategory={setCategory} />
      <Newsboard category={category}/>
      
    </>
  )
}

export default App
