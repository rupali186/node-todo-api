//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectId}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err,client)=>{
	if(err){
		return console.log('Unable to connect to mongodb server');
	}
	console.log('Connected to mongodb server');
	const db=client.db('TodoApp');
	// db.collection('Todos').find({_id:new ObjectId('5c5e6c4728649bce063e271d')}).toArray().then((docs)=>{
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs,undefined,2));
	// },(err)=>{
	// 	console.log('Unable to fetch todos',err);
	// });
	db.collection('Users').find({name:'Rupali'}).toArray().then((docs)=>{
		console.log('Users');
		console.log(JSON.stringify(docs,undefined,2));
	},(err)=>{
		console.log('Unable to find Users',err);
	});
	client.close();
});