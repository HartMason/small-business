import { Component } from "react";
import { useSelector } from "react-redux";
import Login from "../containers/Login";



const ProtectedRoutes = (props) => {
  const { component: Component } = props  
  const user = useSelector(state => state.user)
    return (
    <>
        {console.log(user.online, 'protected')}
        {user.online ? <Component/>:<Login/>}
    </>
  )
}

export default ProtectedRoutes