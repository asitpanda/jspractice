Q1 : carriedSum(1)(2)
Ans: function carriedSum(num1){
    return function(num2){
        return num1+num2   
    }
}
Q2 : Use bind, apply and call to execute the say method with greeting as Hello
var person = {firstName: 'Jon', lastName: 'Kuperman'};
function say(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}

Q3 : Write a function that will loop through a list of integers and print the index of each element after a 3 second delay.
Ans :
var param =[23,25,26];
for(var i=0;i<param.length;i++){
(function(i){
	setTimeout(function(){console.log(param[i])},2000)
})(i)
}

Q4 : 
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
