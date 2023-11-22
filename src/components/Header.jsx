import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import { AppContext } from '../Main';
import { AppBar,Toolbar,IconButton,Typography,Stack,Button } from '@mui/material';
import PriorityHighSharpIcon from '@mui/icons-material/PriorityHighSharp';
import HomeIcon from '@mui/icons-material/Home';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LoginIcon from '@mui/icons-material/Login';
import '../styles/header.scss'
import JIO from "../icons/jioBlue.png"

 const Header = () => {
  const { sessionId}= useContext(AppContext);
  return (
    // old design
    // <nav className="header">
    //     <div>
    //         <h2>{sessionId}</h2>
    //     </div>
    //     <article>
    //         <Link to={"/"}>Home</Link>
    //         <Link to={"/profile"}>Profile</Link>
    //         {
    //         <Link to={"/login"}>Login</Link>
    //         }
    //     </article>
    // </nav>

     // new design
    <AppBar position='static' component="nav">
      <Toolbar>
      <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
      {/* <PriorityHighSharpIcon/> */}
      <img src={JIO} width={'75vh'} height={'50vh'}  />
      </IconButton>
      <Typography variant='h6' component='div' sx={{flexGrow:1}}>
      {sessionId}
      </Typography>
      <Stack direction='row' spacing={2}>
          <Button startIcon={<HomeIcon/>} color='inherit' component={Link} to="/"> Home</Button>
          <Button startIcon={<PersonOutlineIcon/>} color='inherit' component={Link} to="/profile"> Profile</Button>
          <Button startIcon={<LoginIcon/>}  color='inherit' component={Link} to="/login" > Login</Button>
      </Stack>
      </Toolbar>
    </AppBar>
   
  );
}
export default Header;