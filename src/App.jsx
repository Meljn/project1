import { useState } from 'react'
import Header from "./components/Header/Header.jsx"
import Hero_desktop from "./components/Hero/Hero_desktop.jsx"
import Events from "./components/Events/Events.jsx"
import Learning from "./components/Learning/Learning.jsx"
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero_desktop />
      <Events /> 
      <Learning />
      <div>Kasd</div>
    </>
  )
}

