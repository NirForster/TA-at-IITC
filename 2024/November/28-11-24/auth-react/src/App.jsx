import './App.css'
import { useDispatch, useSelector } from 'react-redux' 

// import components

function App() {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  console.log(user);
  
  return (
      <div>
        <h1>Redux and auth and jwt</h1>
      </div>
  )
}

export default App
