import React from 'react'
import Login from './components/auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useEffect } from 'react'
import { setLocalStorage } from './utils/LocalStorage'
import { useState } from 'react'
import { getLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'
import { useContext } from 'react' 

const App = () => {

 
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,setUserData] = useContext(AuthContext)

  // useEffect(() => {
    // if(authData){
      // const loggedInUser = localStorage.getItem("loggedInUser")
      // if(loggedInUser){
        // setUser(loggedInUser.role)
      // }
    // }
  // }, [authData])

    useEffect(() => {                    // I don't know why but ye kaam nhi kr rha hai !!
                                         // Aayush bhaiya se poochna pdega
      // console.log("useEffect triggered");
      const loggedInUser = localStorage.getItem('loggedInUser')
      // console.log("loggedInUser from localStorage:", loggedInUser)
      if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      // console.log("Parsed userData:", userData);
      setUser(userData.role)
      setLoggedInUserData(userData.data)

    }
    }, [])
    

  const handleLogin = (email,password)=>{
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } 
    else if(userData ){
      const employee = userData.find((e)=> email == e.email && e.password == password)
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data: employee}))
      }
    }
    else{
      alert("Invalid Credentials")
    }
  } 


  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/>: ''}
      {user == 'admin'?<AdminDashboard changeUser= {setUser}/>:(user == 'employee' ? <EmployeeDashboard changeUser= {setUser} data={loggedInUserData}/>:null)}
    </>
  )
}
export default App