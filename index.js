import express from 'express'
import routes from './src/routes/crmRoutes'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'


const app = express();
const PORT = 4000;

//mongoose db connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb',
{
useNewUrlParser:true,
useUnifiedTopology: true
}
);

//body parser set up
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


//add the routes 
routes(app);

app.get('/',(req,res)=>{
    res.send("Node and express server running on port "+PORT);
}
);

app.listen(PORT,(req,res)=>{
console.log('Your server is running on port '+PORT);
});