import './App.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import  SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";

function App() {
  return (
    <div className="App">
      <header className='App-header'>
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
