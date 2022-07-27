import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link'

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment Method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on Card"
            fullWidth
            autoComplete="cc-name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            type="number"
            label="Card Number"
            fullWidth
            autoComplete="cc-number"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiration Date"
            fullWidth
            autoComplete="cc-exp"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            type="number"
            label="CVV"
            helperText="Last 3 digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography> or pay with </Typography>
        </Grid>
        <Grid item xs={12}>
        <Link
         component="button"
         variant="h6"
         href="https://www.paypal.com/us/signin"
         
         >
         PayPal
        </Link>
          
        </Grid>
      
        <Grid item xs={12}>
          <Typography variant="subtitle" color="#808080"> Or pay 4 intrest free payments over 12 months with Apple Pay Later*</Typography>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="primary" name="saveCard" value="yes" />}
            label="Remember payment details for next time?"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}