const express=require("express");
const app=express();
const emailfn=require("./email");
const emailToAbhishek=require("./emailtoabhishek")

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.set("view engine","pug");

app.get('/',function(req,res){
    res.render("index");
})

app.post('/invitation',async function(req,res){
    // const name=req.body.name;
    // const phoneNumber=req.body.phoneNumber;
    // const email=req.body.email;
    console.log(req.body)
    emailfn(req.body)
    emailToAbhishek(req.body)
    res.json({
        result:"success"
    })
})

const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log("server is listening at port 3000")
})