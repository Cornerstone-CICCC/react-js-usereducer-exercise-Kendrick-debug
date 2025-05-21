import { useReducer } from "react"
import { toggleReducer } from "../Redusers/toggleReducer"

const Toggle = () => {
    const [state, dispatch] = useReducer(toggleReducer, {isDark: false, fSize: 16} )




  return (
    <div style={{width: "100%", height: "100%"}}>
      <div style={{backgroundColor: state.isDark ? 'black' : 'white', color: state.isDark ? 'white' : 'black', fontSize: state.fSize < 6 ? '1' : state.fSize}}>
        <h2>Toggle Modes</h2>
        <p>This is to test if my toggle modes aefre working properly </p>
      </div>

          <button onClick={() => dispatch({ type: 'toggle' })}>Toggle Dark Mode</button>
          <button onClick={() => dispatch({ type: 'increment' })}>Increase Font Size</button>
          <button onClick={() => dispatch({ type: 'decrement' })}>Decrease Font Size</button>

    </div>
  )
}

export default Toggle