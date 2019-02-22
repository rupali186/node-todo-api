const mongoose=require('mongoose');

mongoose.Promise=global.Promise;
var localhost='mongodb://localhost:27017/TodoApp';
mongoose.connect(process.env.MONGODB_URI||'mongodb://localhost:27017/TodoApp',{
	useNewUrlParser: true
});

module.exports={
	mongoose
};