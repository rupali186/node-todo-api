const {SHA256}=require('crypto-js');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');

var password='abc123!'
// bcrypt.genSalt(10,(err,salt)=>{
// 	bcrypt.hash(password,salt,(err,hash)=>{
// 		console.log(hash);
// 	});
// });
var hashedPass='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTU1MDkwNjI5OX0.M3y18QvMxR8RQzWr02TmrWR4mZY7QRCAiPOe_9XwIbA';
bcrypt.compare(password,hashedPass,(err,res)=>{
	console.log(res);
});

var data={
	id:10
};
var token=jwt.sign(data,'123abc');
console.log(token);

var decoded=jwt.verify(token,'123abc');
console.log('decoded',decoded);
// var message='This is a message';
// var hash=SHA256(message).toString();

// console.log(`Message ${message}`);
// console.log(`hash ${hash}`);

// var data={
// 	id:4
// }
// var token={
// 	data,
// 	hash: SHA256(JSON.stringify(data)+'somesecret').toString()
// }

// token.data.id=5;
// token.data.hash=(JSON.stringify(token.data)).toString();
// var resultHash=SHA256(JSON.stringify(data)+'somesecret').toString();
// if(resultHash===token.hash){
// 	console.log('Data was not changed');
// }else{
// 	console.log('Data changed, do not trust it');
// }