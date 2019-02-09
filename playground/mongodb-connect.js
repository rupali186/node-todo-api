const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err,client)=>{
	if(err){
		return console.log('Unable to connect to mongodb server');
	}
	console.log('Connected to mongodb server');
	const db=client.db('TodoApp');
	// db.collection('Todos').insertOne({
	// 	text:'Some text...',
	// 	completed:false
	// },(err,result)=>{
	// 	if(err){
	// 		return console.log('Unable to insert todo',err);
	// 	}
	// 	console.log(JSON.stringify(result.ops,undefined,2));
	// });
	db.collection('Users').insertOne({
		name:'Rupali',
		age:20,
		location:'Faridabad, Haryana, India'
	},(err,result)=>{
		if(err){
			return console.log('Unable to insert a new user',err);
		}
		console.log('user added: ',JSON.stringify(result.ops,undefined,2));
	});
	client.close();
});