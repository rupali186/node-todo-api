//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectId}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err,client)=>{
	if(err){
		return console.log('Unable to connect to mongodb server');
	}
	console.log('Connected to mongodb server');
	const db=client.db('TodoApp');
	
	db.collection('Users').deleteOne({name:'Rupali'}).then((result)=>{
		console.log(result);
	});
	//client.close();
});