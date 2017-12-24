 //Program
 function framework(obj){
	function display(members){
		return console.log(obj.id + ' uses ' + members );	
	}
	return display;
}

var angular = framework({'id':'angular'});

setTimeout(angular('controllers and services'));

//O/P = angular uses controllers and services

function foo(){
  setTimeout(function(){
    console.log(this.id)
  })
}

foo.call({id:10})

//O/P =  undefined

function foo(){
  return Array.prototype.slice.call(arguments);
}

console.log(foo(10,20,30));
var bar = foo.bind(null,40);
console.log(bar(10,20,30))
//o/p = [10, 20, 30]
// [40, 10, 20, 30]
