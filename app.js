

const Joi = require('joi');
const express = require('express');
const app = express();

//middleware
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('hello world');
});

app.get('/show/:show',(req,res)=>{
    res.send(req.params.show);
});

app.get('/show/:one/:two',(req,res)=>{
    res.send(req.params);
});

app.post('/show',(req,res)=>{
    res.send('this is a post request');
});

app.post('/validation',(req,res)=>{
    // Validation with Joi

    const schema = Joi.object({ name: Joi.string() .min(6) .required() });
        
    const result = schema.validate(req.body);

    if(result.error)
    {
        res.status(400).send(result.error);
        return;
    }

    res.send('this is a post request');
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server Started at port ${port}...`));