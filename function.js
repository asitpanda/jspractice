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

function Car(model, make) {
   this.model = model;
   this.make = make;
 }

Car.prototype.display = function(){
  console.log(this.model+' '+ this.make);
}
var c1 = new Car('city','honda');
setTimeout(c1.display,0)

//O/P = undefined undefined
//Above coded if we remove settimeout then out put will be city honda

function foo(){
  setTimeout(function(){
    console.log(this.id)
  })
}

foo.call({id:10})

//O/P =  undefined

foo();
var foo;
function foo(){
    console.log('I am first...');
}

foo = function(){
  console.log('No, I am first...');
}

//O/P = I am first
