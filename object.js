var obj1 = {
  hello:function(){
    console.log('hello, '+ this.username);
  },
  username: 'Frodo'
};

var obj2 = {
  hello:obj1.hello,
  username:'samel'
}

obj2.hello()

//o/p = hello samel

var buffer = {
  entries:[],
  append:function(s){
    this.entries.push(s);
  },
  concat:function(){
    console.log(this.entries.join('\\'));
  }
};
var source = ['15','11','2016'];
source.forEach(buffer.append);
buffer.concat();
//o/p = Uncaught TypeError: Cannot read property 'push' of undefined
//     at append (<anonymous>:4:18)
//     at Array.forEach (<anonymous>)
//     at <anonymous>:13:8
