import { CounterContext } from './componets/counter'
import { CounterProvider } from './componets/counter'
import { Counter } from './componets/updatecounter'

import './App.css'

function App() {
  

  return (
    

<CounterProvider>
      <div className="app-container">
        <h1 className="app-title">Ansuman's Timer</h1>
      <Counter></Counter>

      </div>
    </CounterProvider>
  )
}

export default App
