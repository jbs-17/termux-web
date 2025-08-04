import express from 'express';
import config from './config.js';

const app = express();

app.get('/',()=>{
 res.send('oke');
});

/*
app.listen(3000, (req, res)=>{
  console.log(`app running on port`, config.PORT);
})
*/

