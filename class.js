function series(character, name) {
  this.name = name;
  this.character = character;
}

var got = series('Jjon snow', 'kit harington');
console.log(got instanceof series);
console.log(got.name)

//O/p =  false, VM266:8 Uncaught TypeError: Cannot read property 'name' of undefined
