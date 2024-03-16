import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routings } from './Components/Routers'
import { Provider } from 'react-redux'
import {cv} from "./Components/Storee"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Provider store={cv}>
        <Routings/>
        </Provider>
            </div>
    </>
  )
}

export default App
