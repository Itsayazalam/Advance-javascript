/******************************* CALL/BIND AND APPLY **********************************************/
/**
 * In JavaScript, call, bind, and apply are methods used to control the this context within functions.
 * They allow you to invoke a function with a specified this value and arguments,
 * which can be particularly useful for borrowing methods from one object and using them on another.
 */
let name1 = {
  firstName: "Jane",
  lastName: "Doe",
  printName(greeting, ...args) {
    console.log(`${greeting ?? "Hello"}, ${this.firstName} ${this.lastName}`);
    if (args && args.length) {
      console.log("Args", args);
    }
  },
};

//In this example we want to reuse/borrow the function printName from name1 object in name object.
let name = {
  firstName: "Ayaz",
  lastName: "Alam",
};

//Call
name1.printName.call(
  name,
  "Namaste",
  "Call Method takes argument in a normal way"
);

//Apply
name1.printName.apply(name, [
  "Assalamu Alaikum",
  "Bellow",
  "Apply takes argument in array",
]);

//Bind
let printNameBind = name1.printName.bind(
  name,
  "Ola",
  "Additional arguments passed in bind"
);
printNameBind(
  "More argument passed in the closure that bind function returned"
);
