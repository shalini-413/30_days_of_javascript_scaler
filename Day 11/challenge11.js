// Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
// Sample Output: name,sclass,rollno

var key = Object.keys(student)
var properties = key.join(",")
console.log(properties)