import './App.css'
import { useSelector } from 'react-redux' 
import Cookies from "js-cookie";

// import components
import Signin from './components/Signin'
import Signup from './components/SIgnup'
import { useEffect } from 'react'

function App() {
  console.log(Cookies.get("jwt"));
  
  const user = useSelector((state) => state.user)

  console.log(user);
  
  useEffect(() => {

  }, [])
  return (
      <div>
        <h1>Redux and auth and jwt</h1>
        <div>
          <Signin />
          <Signup />
        </div>
        <h1> {user.email} </h1>
      </div>
  )
}

export default App
