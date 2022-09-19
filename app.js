const express = require("express"); 
const path = require("path");
const app = express();
const port = 8000;


// getting-started.js
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://nj:0357810@test.ttyroll.mongodb.net/?retryWrites=true&w=majority').then(()=>console.log("Data base succefully connected")).catch(()=>console.log("Data base connection error"));

const bodyparser=require('body-parser')

//define mongo schema
const contactSchema = new mongoose.Schema({
    name: String,
    email:String,
    number:String,
    des:String
});


const RegistrationSchema=new mongoose.Schema({
    name: String,
    email:String,
    number:String,
    age:String,
    gender:String,
    des:String
});

//model
const contact = mongoose.model('contact', contactSchema);
const Registration=mongoose.model('Registration',RegistrationSchema);

//static folder i like name of folder is static  so that!
// we create view folder for template
app.use('/static',express.static('static'));

// for use of static files we can write code
app.use(express.urlencoded());

// Set the template engine as pug
app.set('view engine', 'pug');

// Set the views directory means which directory to read
app.set('views', path.join(__dirname, 'views'));


//EndPoint
app.get('/',(req, res)=>{
    const param={}// |3{content}
    res.status(200).render('home.pug', param);
})
//-----------------------------------------------------------------------------work on below
app.get('/home',(req, res)=>{
    const param={}// |3{content}
    res.status(200).render('home.pug', param);
})
app.get('/about',(req, res)=>{
    const param={}// |3{content}
    res.status(200).render('about.pug', param);
})

app.get('/service',(req, res)=>{
    const param={}// |3{content}
    res.status(200).render('service.pug', param);
})
//-----------------------------------------------------------------------------------------
app.get('/contact',(req, res)=>{
    const param={}// |3{content}
    res.status(200).render('contact.pug', param);
})
//------------------------------------------------------------------------------------------------
app.get('/apply',(req, res)=>{
    const param={}// |3{content}
    res.status(200).render('apply.pug', param);
})

app.post('/apply',(req, res)=>{
    var  mynewData=new Registration(req.body);
    mynewData.save().then(()=>{
        res.send("this item has been saved to the database   Thanks Go back on Page!")
    }).catch(()=>{
        res.status(400).send("item was not not to the data base");
    })
    //res.status(200).render('contact.pug');
})

app.post('/contact',(req, res)=>{
    var  myData=new contact(req.body);
    myData.save().then(()=>{
        res.send("this item has been saved to the database   Thanks Go back on Page!")
    }).catch(()=>{
        res.status(400).send("item was not not to the data base");
    })
    //res.status(200).render('contact.pug');
})



//this  is start server runner code
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});