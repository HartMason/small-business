import React, { useRef, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import CustomStack from './CustomStack'
import CustomCard from './CustomCard'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'



function Login(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userNameInput = useRef("");
  const passwordInput = useRef("");

  const handleSubmit = () => {
    
    dispatch(props.login({
      username: userNameInput.current.value,
      password: passwordInput.current.value
    }))
    navigate("/Listings")
  }
  

  return (
    <CustomCard sx={{margin: "40px auto 40px auto", textAlign: "center"}}>
     <h3>Login</h3> 
      <CustomStack sx={{width: "350px", margin: "40px"}}>
        <TextField inputRef={userNameInput} type="text" label="User Name" variant='outlined'/>
        <TextField inputRef={passwordInput} type="password" label="Password" variant='outlined'/>
        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
      </CustomStack>
    </CustomCard>
  )
}

export default Login