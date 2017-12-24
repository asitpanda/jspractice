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

