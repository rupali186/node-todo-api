const {ObjectID}=require('mongodb');

const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {User}=require('./../server/models/user');

// var id='5c6f830aa8d99b08dcd487db';

// if(!ObjectID.isValid(id)){
// 	console.log('Id not Valid');
// };

// Todo.find({
// 	_id:id
// }).then((todos)=>{
// 	console.log('Todos',todos);
// });

// Todo.findOne({
// 	_id:id
// }).then((todo)=>{
// 	console.log('Todo',todo);
// });

// Todo.findById(id).then((todo)=>{
// 	if(!todo){
// 		return console.log('ID not found');
// 	}
// 	console.log('Todo By id',todo);
// }).catch((e)=>console.log(e));

var userID="5c5ec5856766cc2a501f4cbe";
if(!ObjectID.isValid(userID)){
	console.log('Id not valid');
};

User.findById(userID).then((user)=>{
	if(!user){
		return console.log('User not found');
	}
	console.log('User by ID',user);
}).catch((e)=>console.log(e));