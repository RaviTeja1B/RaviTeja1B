"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//Primitive DATA TYPES
var a = 1;
console.log(a);
var b = 2;
console.log(_typeof(b));
var c = "true";
console.log(_typeof(c));
var d = 32.66;
console.log(_typeof(d));
var e = "RaviTeja";
console.log(_typeof(e));
var f = true;
console.log(_typeof(_typeof(f)));
var h = 56.9332323232;
console.log(h.toFixed(2));
var i = 0;
console.log(Boolean(i));
var j = 1;
console.log(Boolean(j));
var k = 36;
console.log(String(k));
var l = "36.226";
console.log(Number(l).toFixed(1)); //TRIVEA DATA TYPES

var m = "Ravi";
console.log(Number(m));
var n = "hi Ravi";
n = "cu ravi";
console.log(n); // Arrrays Objects

var o = [10, 20, 30, 35, "guvi", {
  name: "ravi",
  age: 21
}];
console.log(o[4]);
console.log(String(o)); // Objects Real Time

var user = {
  name: "Ravi Teja Morampudi",
  Userid: 3655,
  emil: "rav0itejathythm@gmal.com",
  adderise: {
    Street: "Sri Nagar Colony",
    doorno: "7/226",
    city: "vyr",
    pin: 521165
  },
  phone: ["9704423820", "8143862022", "9010948040", "8696808844"],
  company: {
    name: "indexlobey",
    phase: "2nd phase"
  }
};
console.log(user);
console.log(user.phone);
console.log(user.adderise.Street);
console.log(user.phone[1]);
var nam = "company"; //console.log(user.nam.name)//dot operater

console.log(user[nam]["name"]); // off operater

console.log(_typeof(user));
console.log(_typeof(user.phone));
console.log(_typeof(user.adderise.pin)); //Functions

function sum(n1, n2, n3) {
  console.log(n1 + n2 + n3);
  return "krishna"; //krishna is returned insted of the undefine
}

var aa = 10;
var bb = 20;
var cc = 30;
var sum1 = sum(aa, bb, cc);
console.log(sum1); //undefined is the output
//order matters to use the multipul return statement

function grater(dd, ff) {
  if (dd > ff) ;
  {
    return " dd is Greatter";
  }
} //copy by valaue and copy by refarence
//copy by refarence


var a1 = {
  nam: "guvi"
};
var b1 = "Test";