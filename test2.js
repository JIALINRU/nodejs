function person(){
	this.think = function(callback){
		console.log('thinking~~~~');
		setTimeout(function(){
			callback();
		},5000);
	}
	this.answer = function(){
		console.log('7:kkkkkkkkk');
	}
}
var person = new person();
person.think(function(){
	console.log('work out');
});
person.answer();
// person.answer='hahahahhahaha';