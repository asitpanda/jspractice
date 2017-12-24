
foo();
var foo;
function foo(){
    console.log('I am first...');
}

foo = function(){
  console.log('No, I am first...');
}

//O/P = I am first

var bar;
bar();
bar = function(){
  console.log('hello from bar...');
}

var baz;
baz();
function baz(){
  console.log('hello from baz...');
}

//O/P =  bar is not a function.
// if we remove all code related to bar, then o/p will be hello from baz
