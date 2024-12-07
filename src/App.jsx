import './App.css'
import {useSelector} from 'react-redux'

function App() {
  const value = useSelector(state=>state);
  console.log(value);
  return (
    <></>
  )
}

export default App
