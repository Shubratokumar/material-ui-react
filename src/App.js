import './App.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import  SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import { Checkbox, TextField , Box, Paper, Grid} from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange, purple  } from '@mui/material/colors';
import { useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Navbar from './components/Navbar';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const theme = createTheme({
  typography: {
    poster: {
      color: 'red',
    },
    h3:{
      fontSize: 52,
      marginBottom: 15
    },
    // Disable h1 variant
    h1: undefined,
  },
  palette: {
    primary: {
      main: purple[500]
    },
    secondary: {
      main: orange[500]
    }
  },
});

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
      <Container maxWidth="lg">
        <Navbar/>
        <ThemeProvider theme={theme}>      
          <header className='App-header'>
          <Typography variant="h3">
            Welcome to MUI
          </Typography>
          <Typography variant="subtitle1">
            Learn how to use Material UI
          </Typography>
          <Box sx={{ width: '100%' }}>
          <Grid container spacing={2} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justify="center">
            <Grid item xs={12} sm={6} md={4} >
              <Item>1</Item>
            </Grid>
            <Grid item xs={12} sm={6} md={4} >
              <Item>2</Item>
            </Grid>
            <Grid item xs={12} sm={6} md={4} >
              <Item>3</Item>
            </Grid>
            <Grid item xs={12} sm={6} md={4} >
              <Item>4</Item>
            </Grid>
            <Grid item xs={12} sm={6} md={4} >
              <Item>5</Item>
            </Grid>
            <Grid item xs={12} sm={6} md={4} >
              <Item>6</Item>
            </Grid>
          </Grid>
        </Box>
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
        </ThemeProvider>
      </Container>
    </div>
  );
}

export default App;
