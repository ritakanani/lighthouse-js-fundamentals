// 1))

const sayHello = function() {
  console.log("Hello world");
}

sayHello(); // print Hello world

// 2))

const sayHello = function(name) {
  console.log("Hello, " + name);
};                // no declare the value of name

// 3)) // console.log:

const sayHelloToConsole = function(name) {
  console.log("Hello, " + name);
}
sayHelloToConsole('John');  // print Hello, John

// 4)) // return:

const returnSayHello = function(name) {
  return "Hello, " + name;
}

const greeting = returnSayHello("John"); // print undefined

// 5)

console.log(greeting); // print Hello, John
