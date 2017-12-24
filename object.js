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
