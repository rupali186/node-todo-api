require('./config/config');

var express=require('express');
const _=require('lodash');
var bodyParser=require('body-parser');
const {ObjectID}=require('mongodb');

var {mongoose}=require('./db/mongoose.js');
var {Todo}=require('./models/todo.js');
var {User}=require('./models/user.js');

const port=process.env.PORT;

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

app.delete('/todos/:id',(req,res)=>{
	var id=req.params.id;
	if(!ObjectID.isValid(id)){
		res.status(400).send({});
		return console.log('ID is invalid');
	};
	Todo.findByIdAndRemove(id).then((todo)=>{
		if(!todo){
			res.status(404).send({});
		}else{
			res.status(200).send({todo});
		}
		console.log(todo);
	},(e)=>{
		res.status(400).send(e);
	});
});

app.patch('/todos/:id',(req,res)=>{
	var id=req.params.id;
	var body=_.pick(req.body,['text','completed']);
	if(!ObjectID.isValid(id)){
		res.status(400).send({});
		return console.log('ID is invalid');
	};
	if(_.isBoolean(body.completed)&&body.completed){
		body.completedAt=new Date().getTime();
	}else{
		body.completed=false;
		body.completedAt=null;
	}
	Todo.findByIdAndUpdate(id,{$set:body},{new:true}).then((todo)=>{
		if(!todo){
			return res.status(400).send();
		}
		res.send({todo});
	}).catch((e)=>{
		res.status(400).send();
	});
});
app.listen(port,()=>{
	console.log(`Started on port ${port}`);
});
module.exports={
	app
}