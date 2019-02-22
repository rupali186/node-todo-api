var express=require('express');
var bodyParser=require('body-parser');
const {ObjectID}=require('mongodb');

var {mongoose}=require('./db/mongoose.js');
var {Todo}=require('./models/todo.js');
var {User}=require('./models/user.js');

const port=process.env.PORT||3000;

var app=express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
	console.log(req.body);
	var todo=new Todo({
		text:req.body.text
	});
	todo.save().then((doc)=>{
		res.send(doc);
	},(e)=>{
		res.status(400).send(e);
	});
});

app.get('/todos',(req,res)=>{
	Todo.find().then((todos)=>{
		res.send({todos});
	},(e)=>{
		res.status(400).send(e);
	});
});

app.get('/todos/:id',(req,res)=>{
	var id=req.params.id;
	if(!ObjectID.isValid(id)){
		res.status(400).send({});
		return console.log('ID is invalid');
	}
	Todo.findById(id).then((todo)=>{
		if(todo){
			res.send({todo});
		}else{
			res.status(404).send({});
		}
	},(e)=>{
		res.status(400).send(e);
	});
	//res.send(req.params);
});
app.listen(port,()=>{
	console.log(`Started on port ${port}`);
});
module.exports={
	app
}