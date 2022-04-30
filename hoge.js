const express = require('express');

const app = express();
const userlist=new Object();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//curl -i -X POST -H "Content-Type:application/json" -d '{\"id\":\"1024\",\"name\":\"morijellyfish\"}' localhost:3000/adduser
app.post('/adduser',function(req,res){
	if(userlist[req.body.id]){
		res.status(409).json({
			"status":"conflict"
		});
	}else{
		userlist[req.body.id]=req.body.name;
		res.status(201).json({
			"status":"created"
		});
	}
});

//curl -i localhost:3000/userlist
app.get('/userlist',function(req,res){
	res.send(userlist);
})

//curl -i -X PUT -H "Content-Type: application/json" -d '{\"id\":\"1024\",\"name\":\"morimori\"}' localhost:3000/rename
app.put('/rename',function(req,res){
	if(userlist[req.body.id]){
		userlist[req.body.id]=req.body.name;
		res.status(200).json({
			"status":"ok"
		});
	}else{
		res.status(404).json({
			"status":"not found"
		});
	}
})

//curl -i -X DELETE -H "Content-Type:application/json" -d '{\"id\":\"1024\"}' localhost:3000/delete
app.delete('/delete',function(req,res){
	if(userlist[req.body.id]){
		delete userlist[req.body.id]
		res.status(200).json({
			"status":"ok"
		});
	}else{
		res.status(404).json({
			"status":"not found"
		});
	}
})



app.listen(3000,()=>console.log('I am on 3000'));

