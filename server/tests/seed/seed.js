const jwt=require('jsonwebtoken');

const {ObjectId}=require('mongodb');
const {Todo}=require('./../../models/todo');
const {User}=require('./../../models/user');

const userOneID=new ObjectId();
const userTwoID=new ObjectId();

const users=[{
	_id:userOneID,
	email:'rupali@example.com',
	password:'userOnePass',
	tokens:[{
		access:'auth',
		token:jwt.sign({_id:userOneID,access:'auth'},'123abc').toString()
	}]
},{
	_id:userTwoID,
	email:'jen@example.com',
	password:'userTwoPass'
}];
const todos=[{
	_id:new ObjectId(),
	text:'First test todo'
},{
	_id:new ObjectId(),
	text:'Second test todo',
	completed:true,
	completedAt:333
}];
const populateTodos=(done)=>{
	Todo.remove({}).then(()=>{
		return Todo.insertMany(todos);
	}).then(()=>{
		done();
	});
}
const populateUsers=(done)=>{
	User.remove({}).then(()=>{
		var userOne=new User(users[0]).save();
		var userTwo=new User(users[1]).save();
		return Promise.all([userOne,userTwo]);
	}).then(()=>{
		done();
	});
}

module.exports={
	todos,
	populateTodos,
	users,
	populateUsers
}