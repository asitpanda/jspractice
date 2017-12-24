function series(character, name) {
  this.name = name;
  this.character = character;
}

var got = series('Jjon snow', 'kit harington');
console.log(got instanceof series);
console.log(got.name)

//O/p =  false, VM266:8 Uncaught TypeError: Cannot read property 'name' of undefined

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
