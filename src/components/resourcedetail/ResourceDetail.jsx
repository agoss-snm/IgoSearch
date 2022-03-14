
import { useState, useContext } from "react";
// material 
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//semantic
import { Button } from "semantic-ui-react";
import { Image} from "semantic-ui-react";
import './resourcedetail.css'

//style
export default function ItemDetail({ data }) {

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 1000 }} id='boxStyle'>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            <Image  floated='center' height="160"  src={data.cardImg} />
          </Typography>
        </Grid>

      <Grid item xs={12} md={6}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          <h1>{data.title}</h1>
          <br/><br/>
          {data.description}
        </Typography>
      </Grid>
      </Grid>


    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
           <u>{data.subtitle}</u>
        <Typography sx={{ mt: 2, mb: 3 }} variant="h6" component="div">
           <u>{data.link1}</u>
        </Typography>
      </Grid>

      <Grid item xs={12} md={6}>
          <Button id='btnresource' href='/Dashboard'>Volver</Button>
      </Grid>
    </Grid>
  </Box>
);
}


