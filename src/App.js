import './App.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import  SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import { Checkbox, TextField , Box} from '@mui/material';
import { useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

function CheckBoxEx (){
  const [checked, setChecked] = useState(true);
  return(
    <>
      <FormControlLabel 
        control= {
          <Checkbox
            checked={checked}
            icon={<FavoriteBorder />} 
            checkedIcon={<Favorite />}
            onChange={e => setChecked(e.target.checked)}
            inputPorps ={{
              'aria-label': 'controlled'
            }}
          />
        }
        label="Testing Checkbox"
      />
    </>
  )
}

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
          <TextField
          label="Input Field"
          variant="standard"
          color="secondary"
          />
          <TextField
          label="Name"
          color="secondary"
          placeholder='Your Name'
          />
          <TextField
          label="Email"
          color="secondary"
          type="email"
          placeholder='text@gmail.com'
          />
          <TextField
          defaultValue="Date"
          color="secondary"
          type="date"
          />
          <TextField
          defaultValue=""
          color="secondary"
          type="time"
          />
        </Box>
        <CheckBoxEx/>
        <ButtonGroup size="small" aria-label="small button group">
          <Button 
              onClick={() => {
              alert('Save it.');
              }}
              startIcon={<SaveIcon />}

              variant="contained"
              size="medium"
              color="secondary"
              disableElevation
          >Save</Button>

          <Button 
              onClick={() => {
              alert('Delete it.');
              }}
              startIcon={<DeleteIcon />}

              variant="contained"
              size="medium"
              color="secondary"
              disableElevation
          >Delete</Button>
        </ButtonGroup>
      </header>
    </div>
  );
}

export default App;
