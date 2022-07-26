import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { ImageList } from '@mui/material';
import ImageListItem from '@mui/material/ImageList';
import itemData from '@mui/material/ImageList';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';



const products = [
  {
    name: 'iPhone 13 Pro Max',
    desc: '512GB, Graphite',
    price: '$1099.99',
  },
  {
    name: 'AppleCare',
    desc: 'for iPhone 13 Pro Max 512GB, Graphite',
    price: '$65',
  },
  {
    name: 'AirPods (Gen 3)',
    desc: '',
    price: '$149',
  },
  {
    name: 'Apple Watch SE',
    desc: '44mm, Silver, Nike Sport Band (Black)',
    price: '$339',
  },
  { name: 'Shipping', desc: '', price: '$0.00' },
];

const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type:', detail: 'Visa' },
  { name: 'Card holder:', detail: 'John Smith' },
  { name: 'Card #:', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiration date:', detail: '04/2024' },
];

export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order Summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $1,652.99
          </Typography>
        </ListItem>
        <img
            loading="Loading..."
            width="100"
            src={`https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-graphite-select?wid=940&hei=1112&fmt=png-alpha&.v=1645552346288`}
            srcSet={`https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-graphite-select?wid=940&hei=1112&fmt=png-alpha&.v=1645552346288`}
            alt="iPhone 13 Pro Max, Graphite"
          />
          <img
            loading="Loading..."
            width="100"
            src={`https://static.wixstatic.com/media/8269c5_0f14ec36eae84c739c38bc265b3c7aec.png/v1/fill/w_380,h_380,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8269c5_0f14ec36eae84c739c38bc265b3c7aec.png`}
            srcSet={`https://static.wixstatic.com/media/8269c5_0f14ec36eae84c739c38bc265b3c7aec.png/v1/fill/w_380,h_380,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8269c5_0f14ec36eae84c739c38bc265b3c7aec.png`}
            alt="Apple Care for iPhone 13 Pro Max"
          />
          <img
            loading="Loading..."
            width="100"
            src={`https://help.apple.com/assets/61AFEC45FA5233173908347B/61B0509E1BF38548362237B5/en_US/c9fa6dfb1629a0bea9459d868e73b273.png`}
            srcSet={`https://help.apple.com/assets/61AFEC45FA5233173908347B/61B0509E1BF38548362237B5/en_US/c9fa6dfb1629a0bea9459d868e73b273.png`}
            alt="AirPods (Gen 3)"
          />
          <img
            loading="Loading..."
            width="100"
            src={`https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MKUQ3_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=1632171068000`}
            srcSet={`https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MKUQ3_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=1632171068000`}
            alt="Apple Watch SE Band"
          />
          <img
            loading="Loading..."
            width="100"
            src={'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-44-alum-silver-nc-se_VW_PF_WF_SI+watch-face-44-se-sportloop-pride_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=1623899886000%2C1651956728008'}
            srcSet={`https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-44-alum-silver-nc-se_VW_PF_WF_SI+watch-face-44-se-sportloop-pride_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=1623899886000%2C1651956728008`}
            alt="Apple Watch SE"
          />
  
   
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment Details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}