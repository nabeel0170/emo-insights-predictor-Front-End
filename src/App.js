import {useState, userState} from 'react';
import TextField from '@mui/material/TextField';
import './App.css';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const App = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const registerUser = async (event) => {
    event.preventDefault()
      const response = await fetch('http://localhost:8000/api/users/registerUser',{
        method:'POST',
        headers:{
          "Content-Type":"application/json"},
        body:JSON.stringify({
           name,email,password
        })
      })
      const data = await response.json();
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Register</h1>
      <form onSubmit={registerUser}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </Grid>
        <Grid item xs={3}>
        <Button type="submit" variant="outlined">Register</Button>
        </Grid>
      </Grid>
      </form>
    </div>
  );
}

export default App;
