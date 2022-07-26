import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxesGroup() {
  const [state, setState] = React.useState({
    Standard: true,
    Express: false,
    
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { Standard,Express, } = state;
  const error = [Standard, Express,].filter((v) => v).length !== 2;

  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl
        required
        error={error}
        component="fieldset"
        sx={{ m: 3 }}
        variant="standard"
      >
        <FormLabel component="legend">Pick One</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={Standard} onChange={handleChange} name="standard" />
            }
            label="Standard(+$0.00, will arrive in 2-3 days.)"
          />
          <FormControlLabel
            control={
              <Checkbox checked={Express} onChange={handleChange} name="express" />
            }
            label="Express(+35.00, will arrive beteween today and tommorow)"
          />
          
          
        </FormGroup>
        <FormHelperText>Only choose one option.</FormHelperText>
      </FormControl>
    </Box>
  );
}
