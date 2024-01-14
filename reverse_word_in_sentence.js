// write a program to the reverse a string in words

let str = "hello world";
var savedStr = str.split(" ")
.map(function (words) 
{ return words.split("").reverse().join("");
})


console.log(savedStr.join(" "));