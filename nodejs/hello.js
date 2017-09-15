//exports.world=function(){console.log('q')}

module.exports = function hello() {
	var name;
	this.setName = function(thyName) {
		name = thyName;
	}
	this.sayHello = function() {
		console.log('Hello ' + name);
	}
}